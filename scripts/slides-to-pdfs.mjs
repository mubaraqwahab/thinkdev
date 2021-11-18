// @ts-check

/**
 * @file
 * This script generates PDF files for the HTML slides.
 * Run it as part of the production build process,
 * only after templates have been rendered to `_site/`.
 *
 * It uses puppeteer under the hood, so it may be resource intensive
 * in a CI environment; be careful how you use it!
 *
 * This file is an ES module (ESM; `.mjs`) because it has ESM dependencies.
 */

import fs from "node:fs/promises"
import path from "node:path"
import { pathToFileURL } from "node:url"
import { rehype } from "rehype"
import { read, write } from "to-vfile"
import { reporter } from "vfile-reporter"
import { visit } from "unist-util-visit"
import puppeteer from "puppeteer"

/**
 * @typedef {import("vfile").VFile} VFile
 */

main()

async function main() {
  const slidesListDir = "_site/slides"
  // Get names (i.e. slugs) of generated HTML slides
  const slidesList = await fs.readdir(slidesListDir)

  const browser = await puppeteer.launch()

  // Don't use .forEach over Promise.all(.map)
  // I want to wait for all slides to be printed before proceeding
  // See https://advancedweb.hu/how-to-use-async-functions-with-array-foreach-in-javascript/
  await Promise.all(
    slidesList.map(async (slidesName) => {
      const slidesPath = path.join(slidesListDir, slidesName, "index.html")
      const inVfile = await read(slidesPath)

      const tempVfile = await preprocess(inVfile)
      // Write to _site/slides/*/_temp.html
      tempVfile.stem = "_temp"
      await write(tempVfile, "utf8")

      const page = await browser.newPage()
      page.on("console", (msg) => {
        console.log(`${msg.type()}: ${msg.text()}`)
      })
      page.on("pageerror", (err) => console.error(err))
      page.on("error", (err) => console.error("...", err))

      // file URI of temp file with reveal.js print-pdf query param
      const url = pathToFileURL(tempVfile.path).href + "?print-pdf"
      console.log({ url })
      await page.goto(url)

      // Print to `_site/slides/*.pdf`
      await page.pdf({
        path: tempVfile.dirname + ".pdf",
        printBackground: true,
        preferCSSPageSize: true,
      })

      // await fs.unlink(tempVfile.path)
    })
  )

  await browser.close()
}

/**
 * Prepare an HTML document for printing.
 *
 * This function performs these transformations:
 * - Rewrites relative subresource URLs to point to the `_site` dir.
 *   This is necessary to load styles, images, etc. for the printed pdf.
 * - Bases relative anchor hrefs on the URL of the site to be deployed.
 *   This is necessary for links in the printed pdf to be valid.
 *
 * @param {VFile} doc
 * @returns {Promise<VFile>}
 */
async function preprocess(doc) {
  const vfile = await rehype()
    .use(rewriteSubresourceURLs)
    .use(rewriteAnchorURLs)
    .process(doc)
  console.error(reporter(vfile))
  return vfile
}

/**
 * Rewrite relative `<link>`, `<script>`, `<img>` URLs to point to the `_site` dir
 *
 * This is a rehype plugin.
 * @see https://unifiedjs.com/learn/guide/create-a-plugin
 */
function rewriteSubresourceURLs() {
  return (tree) => {
    visit(
      tree,
      [
        { type: "element", tagName: "link" },
        { type: "element", tagName: "script" },
        { type: "element", tagName: "img" },
      ],
      (node) => {
        const urlProp = node.tagName === "link" ? "href" : "src"
        if (node.properties[urlProp]?.startsWith("/")) {
          // slide page is at `_site/slides/XYZ/index.html`
          // root is `_site`, which is two levels above.
          node.properties[urlProp] = "../.." + node.properties[urlProp]
        }
      }
    )
    return tree
  }
}

/**
 * Rewrite relative anchor hrefs as absolute URLs (i.e. with origin).
 * Requires one of `DEPLOY_PRIME_URL` and `URL` env vars to be set,
 * as the value is used as the origin of URLs.
 *
 * The env vars are automatically set by Netlify.
 * - `URL` is always the URL of the Netlify site
 * - `DEPLOY_PRIME_URL` is the URL to which the site will be deployed.
 *   For example, when building a deploy preview, the value of this
 *   variable is the deploy preview URL.
 * If both vars are set, then `DEPLOY_PRIME_URL` is preferred.
 *
 * This is a rehype plugin.
 * @see {@link https://unifiedjs.com/learn/guide/create-a-plugin}
 */
function rewriteAnchorURLs() {
  return (tree) => {
    const baseURL = process.env.DEPLOY_PRIME_URL || process.env.URL

    if (!baseURL) {
      throw new Error(
        "Neither DEPLOY_PRIME_URL nor URL environment variable is set."
      )
    }

    visit(tree, { type: "element", tagName: "a" }, (node) => {
      // If .href is already an absolute URL, baseURL will be ignored
      node.properties.href = new URL(node.properties.href, baseURL).href
    })

    return tree
  }
}
