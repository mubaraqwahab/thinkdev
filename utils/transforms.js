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
   * Parent transform for other transforms that need to manipulate a DOM.
   * @type {Transform}
   */
  jsdom(content, outputPath) {
    if (!outputPath.endsWith(".html")) {
      return content
    }

    const dom = new JSDOM(content)
    const { window } = dom

    autolinkLessonHeadings(window, outputPath)
    syntaxHighlight(window)
    insertCopyCodeButtons(window)

    return dom.serialize()
  },
}

/**
 * Auto-add permalinks to headings h2 and h3 in lesson pages.
 * There's no need to add to h1's cos the page link already represents them.
 * As for levels h4 and h5, I'm not using them.
 * The permalinks are also not applied to the slides.
 *
 * @type {JSDOMSubTransform}
 */
function autolinkLessonHeadings({ document }, outputPath) {
  if (!outputPath.includes("/lessons/")) {
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

/**
 * @type {JSDOMSubTransform}
 */
function insertCopyCodeButtons({ document }) {
  // TODO: review!
  document.querySelectorAll("pre code").forEach((code) => {
    const wrapper = document.createElement("div")
    wrapper.className = "code-wrapper"

    const pre = code.parentElement

    const copyButton = document.createElement("button")
    copyButton.type = "button"
    copyButton.classList.add("copy-code-button", "hidden")
    copyButton.innerHTML = "Copy"

    wrapper.appendChild(pre.cloneNode(true))
    wrapper.appendChild(copyButton)

    pre.parentElement.replaceChild(wrapper, pre)
  })
}
