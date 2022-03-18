// @ts-check

const htmlmin = require("html-minifier-terser")
const { JSDOM } = require("jsdom")
const GithubSlugger = require("github-slugger")
const hljs = require("highlight.js").default

/**
 * @callback Transform
 * @param {string} content
 * @param {string} outputPath
 * @returns {string|Promise<string>}
 */

/**
 * @callback JSDOMSubTransform
 * @param {import('jsdom').DOMWindow} window
 * @param {string} outputPath
 * @returns {void}
 */

module.exports = {
  /**
   * @type {Transform}
   */
  minifyHTML(content, outputPath) {
    if (!outputPath.endsWith(".html")) return content
    const minified = htmlmin.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
    })
    return minified
  },

  /**
   * Auto-add permalinks to headings h2 and h3.
   * There's no need to add to h1's cos the page link already represents them.
   * As for levels h4 and h5, I'm not using them.
   * The permalinks are also not applied to the slides.
   * @type {Transform}
   */
  jsdom(content, outputPath) {
    if (!outputPath.endsWith(".html")) {
      return content
    }

    const dom = new JSDOM(content)
    const { window } = dom

    autolinkHeadings(window, outputPath)
    syntaxHighlight(window)

    return dom.serialize()
  },
}

/**
 * Auto-add permalinks to headings h2 and h3.
 * There's no need to add to h1's cos the page link already represents them.
 * As for levels h4 and h5, I'm not using them.
 * The permalinks are also not applied to the slides.
 *
 * @type {JSDOMSubTransform}
 */
function autolinkHeadings({ document }, outputPath) {
  if (outputPath.includes("/slides/")) {
    return
  }

  document.querySelectorAll("h2, h3").forEach((heading) => {
    // Slugify the heading text
    const slugger = new GithubSlugger()
    heading.id = heading.id || slugger.slug(heading.textContent)

    // Link an anchor to the heading
    const anchor = document.createElement("a")
    anchor.href = `#${heading.id}`
    anchor.className = "permalink"

    // Wrap the heading text in an <a>
    anchor.innerHTML = heading.innerHTML
    heading.innerHTML = anchor.outerHTML
  })
}

/**
 * @type {JSDOMSubTransform}
 */
function syntaxHighlight({ document }) {
  document.querySelectorAll("pre code").forEach((code) => {
    hljs.highlightElement(code)
  })
}
