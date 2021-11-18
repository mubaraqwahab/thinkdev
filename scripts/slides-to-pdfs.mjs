// @ts-check

// TODO: jsdoc this script
// Run this only after `_site/` has been created
// and the templates have been rendered.

import fs from "node:fs"
import path from "node:path"
import { execSync, exec } from "node:child_process"
import { rehype } from "rehype"
import { reporter } from "vfile-reporter"
import { visit } from "unist-util-visit"

main()

function main() {
  // A note on terminology:
  // I use "slides" to mean a presentation file
  // and "slides list" to mean a list of presentation files.

  const rootDir = "_site/"
  const slidesListDir = path.join(rootDir, "slides/")
  const tempFileName = "_pdf.html"

  fs.readdirSync(slidesListDir, { withFileTypes: true })
    // Ignore existing pdfs
    .filter((dirent) => dirent.isDirectory())
    // Reduce to folder names
    .map((dirent) => dirent.name)
    .forEach(async (slidesName) => {
      const slidesPath = path.join(slidesListDir, slidesName)
      const tempOutFile = path.join(slidesPath, tempFileName)
      const outFile = path.join(slidesListDir, slidesName + ".pdf")

      console.log(`Converting ${slidesName} to PDF...`)

      const doc = fs.readFileSync(path.join(slidesPath, "index.html"))
      const processed = await preprocess(doc)
      fs.writeFileSync(tempOutFile, processed)

      // Print to `_site/slides/<XYZ>.pdf`
      // This size "998x728" is from the size of one printed manually
      // const stdout = execSync(
      //   `npx decktape --size "998x728" --load-pause 1500 reveal ${tempOutFile}?print-pdf ${outFile}`
      // )
      // console.log(stdout)

      // fs.unlinkSync(tempOutFile)
    })
}

/**
 * Prepare a slides HTML document for printing
 *
 * This function performs these transformations:
 * * Rewrite relative subresource URLs to point to the `_site` dir.
 *   This is necessary to load styles, images, etc. for the printed pdf.
 * * Base relative anchor hrefs on the URL of the site to be deployed.
 *   This is necessary for links in the printed pdf to be valid.
 *
 * @param {string|Buffer} doc
 * @returns {Promise<string>}
 */
async function preprocess(doc) {
  const vfile = await rehype()
    .use(rewriteSubresourceURLs)
    .use(rewriteAnchorURLs)
    .process(doc)
  console.error(reporter(vfile))
  return String(vfile)
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
 * Rewrite relative `<link>`, `<script>`, `<img>` URLs to point to the `_site` dir
 *
 * This is a rehype plugin.
 * @see {@link https://unifiedjs.com/learn/guide/create-a-plugin}
 */
function rewriteAnchorURLs() {
  return (tree) => {
    // URL is always the URL of the site,
    // but DEPLOY_PRIME_URL works for deploy previews too
    // Both are Netlify env vars.
    const baseURL = process.env.DEPLOY_PRIME_URL || process.env.URL

    if (!baseURL) {
      console.warn(
        "\nNeither DEPLOY_PRIME_URL nor URL environment variable is set\n"
      )
    }

    visit(tree, { type: "element", tagName: "a" }, (node) => {
      // If .href is already an absolute URL, baseURL will be ignored
      node.properties.href = new URL(node.properties.href, baseURL).href
    })

    return tree
  }
}
