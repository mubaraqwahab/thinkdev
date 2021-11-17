// @ts-check

// TODO: jsdoc this script
// Run this only after _site has been created
// and the templates have been rendered.

import fs from "node:fs"
import path from "node:path"
import { execSync } from "node:child_process"
import { rehype } from "rehype"
import { reporter } from "vfile-reporter"
import { visit } from "unist-util-visit"

const ROOT_DIR = "_site/"
const SLIDES_DIR = path.join(ROOT_DIR, "slides/")
const TEMP_FILE_NAME = "_pdf.html"

// URL is always the URL of the site
// but DEPLOY_PRIME_URL works for deploy previews too
const BASE_URL = process.env.DEPLOY_PRIME_URL || process.env.URL

if (!BASE_URL) {
  console.error(
    "\nCan't convert slides to PDF when neither DEPLOY_PRIME_URL nor URL environment variable is set\n"
  )
  process.exit()
}

main()

function main() {
  fs.readdirSync(SLIDES_DIR, { withFileTypes: true })
    // Ignore existing pdfs
    .filter((dirent) => dirent.isDirectory())
    // Reduce to folder names
    .map((dirent) => dirent.name)
    .forEach((slidesName) => {
      const slidesPath = path.join(SLIDES_DIR, slidesName)
      const tempOutFile = path.join(slidesPath, TEMP_FILE_NAME)
      const outFile = path.join(SLIDES_DIR, slidesName + ".pdf")

      console.log(`Converting ${slidesName} to PDF...`)

      const doc = fs.readFileSync(path.join(slidesPath, "index.html"))
      const processed = preprocess(doc)
      fs.writeFileSync(tempOutFile, processed)

      // Print to `_site/slides/<XYZ>.pdf`
      execSync(`npx decktape reveal ${tempOutFile} ${outFile}`)

      fs.unlinkSync(tempOutFile)

      console.log(`Done converting ${slidesName}.\n`)
    })
}

function preprocess(doc) {
  const vfile = rehype().use(rewriteURLs).processSync(doc)
  console.error(reporter(vfile))
  return String(vfile)
}

// See https://unifiedjs.com/learn/guide/create-a-plugin/
function rewriteURLs() {
  return (tree) => {
    // Rewrite <link>, <script>, <img> URLs to point to `_site`
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

    // Base anchor hrefs on the Netlify env vars, DEPLOY_PRIME_URL or URL
    // This is necessary for printed links to be valid
    visit(tree, { type: "element", tagName: "a" }, (node) => {
      // If .href is already an absolute URL, baseURL will be ignored
      node.properties.href = new URL(node.properties.href, BASE_URL).href
    })
  }
}
