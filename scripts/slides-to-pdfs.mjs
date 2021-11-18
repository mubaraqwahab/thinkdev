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
import { rehype } from "rehype"
import { read } from "to-vfile"
import { reporter } from "vfile-reporter"
import { visit } from "unist-util-visit"

main()

async function main() {
  // Get names (i.e. slugs) of generated HTML slides
  const dirents = await fs.readdir("_site/slides", { withFileTypes: true })
  const slidesNames = dirents
    // Get only dirents of slides dirs
    // E.g. 01-introduction/ not 01-introduction.pdf
    // I believe I only need this filter so that this script
    // doesn't mess with PDFs that I printed manually earlier
    .filter((dirent) => dirent.isDirectory())
    // Reduce to dir names
    .map((dirent) => dirent.name)

  // Prepare the slides for printing
  const processedVfiles = await Promise.all(
    slidesNames.map(async (slidesName) => {
      const inVfile = await read(path.join(slidesListDir, slidesName, "index.html"))
      return preprocess(inVfile)
    })
  )

  // TODO: start puppeteer
  // You do not need a temp file with puppeteer
  // See https://pptr.dev/#?product=Puppeteer&version=v11.0.0&show=api-pagesetcontenthtml-options
  // Find out: how would this work with relative URLs??
  
  processedVfiles.forEach(async (vfile) => {
    // TODO: Print to `_site/slides/<XYZ>.pdf`

    const outPath = vfile.dirname + ".pdf"
  })
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
