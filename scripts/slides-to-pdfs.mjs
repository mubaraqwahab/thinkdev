// @ts-check

/**
 * @file
 * This script generates PDF files for the HTML slides.
 * Run it as part of the production build process,
 * only after templates have been rendered to `_site/`.
 *
 * It launches a temporary server for the `_site/` dir
 * and then runs puppeteer to print the HTML slides from the server
 *
 * This file is an ES module (ESM; `.mjs`) because it has ESM dependencies.
 */

import fs from "fs/promises"
import http from "http"
import handler from "serve-handler"
import puppeteer from "puppeteer"
import { rehype } from "rehype"
import { reporter } from "vfile-reporter"
import { visit } from "unist-util-visit"

const TEMP_PORT = 3000
const TEMP_URL = `http://localhost:${TEMP_PORT}`

const server = http.createServer((request, response) => {
  return handler(request, response, {
    public: "_site",
    cleanUrls: true,
  })
})

server.listen(TEMP_PORT, async () => {
  try {
    console.log(`Running temp server at ${TEMP_URL}`)

    const slidesDirContent = await fs.readdir("_site/slides")
    const slidesList = slidesDirContent.filter((name) => !name.includes("."))

    const browser = await puppeteer.launch()

    await Promise.all(
      slidesList.map(async (slidesName) => {
        const slidesPath = `_site/slides/${slidesName}/index.html`
        const tempPath = `_site/slides/${slidesName}/temp.html`
        const doc = await fs.readFile(slidesPath, "utf8")
        const processed = await preprocess(doc)
        await fs.writeFile(tempPath, processed)

        const page = await browser.newPage()
        await page.goto(`${TEMP_URL}/slides/${slidesName}/temp/?print-pdf`)
        await page.waitForNetworkIdle()

        const pdfPath = `_site/slides/${slidesName}.pdf`
        await page.pdf({
          path: pdfPath,
          printBackground: true,
          preferCSSPageSize: true,
        })
        console.log(`Generated PDF for ${slidesName} at ${pdfPath}`)

        await fs.unlink(tempPath)
      })
    )

    await browser.close()
  } catch (e) {
    console.error(e)
  } finally {
    // Destroy the server
    process.exit()
  }
})

/**
 * Prepare an HTML document for printing.
 *
 * This function performs these transformations:
 * - Bases relative anchor hrefs on the URL of the site to be deployed.
 *   This is necessary for links in the printed pdf to be valid.
 *
 * @param {string} doc
 * @returns {Promise<string>}
 */
async function preprocess(doc) {
  const vfile = await rehype().use(rewriteAnchorURLs).process(doc)
  console.error(reporter(vfile))
  return String(vfile)
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
