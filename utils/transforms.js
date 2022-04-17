// @ts-check

const htmlmin = require("html-minifier-terser")
const { JSDOM } = require("jsdom")
const GithubSlugger = require("github-slugger")
const hljs = require("highlight.js").default

module.exports = { transformHTML }

/**
 * Parent transform for manipulating HTML pages.
 * @type {Transform}
 */
function transformHTML(content, outputPath) {
  if (!outputPath.endsWith(".html")) {
    return content
  }

  const dom = new JSDOM(content)
  const { window } = dom

  console.log({outputPath})

  // Apply sub-transforms to pages
  autoLinkLessonHeadings(window, outputPath)
  syntaxHighlightNonDecks(window, outputPath)
  insertCopyCodeButtonsInNonDecks(window, outputPath)
  preventCharacterComposition(window, outputPath)

  const html = dom.serialize()

  if (process.env.NODE_ENV === "production") {
    return htmlmin.minify(html, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
    })
  } else {
    return html
  }
}

/**
 * Auto-add permalinks to headings h2 and h3 in lesson pages.
 * There's no need to add to h1's cos the page link already represents them.
 * As for levels h4 and h5, I'm not using them.
 *
 * @type {HTMLSubTransform}
 */
function autoLinkLessonHeadings({ document }, outputPath) {
  if (!outputPath.includes("/lessons/")) return

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
 * Highlight all code blocks in non-deck pages.
 * (Reveal will handle syntax highlighting in decks at runtime.)
 * @type {HTMLSubTransform}
 */
function syntaxHighlightNonDecks({ document }, outputPath) {
  if (outputPath.includes("/decks/")) return

  const codes = /** @type {NodeListOf<HTMLElement>} */ (
    document.querySelectorAll("pre code")
  )
  codes.forEach((code) => hljs.highlightElement(code))
}

/**
 * @type {HTMLSubTransform}
 * Insert copy buttons next to all code blocks in the non-deck pages.
 * (I don't want copy buttons in decks because it's distracting while presenting.)
 */
function insertCopyCodeButtonsInNonDecks({ document }, outputPath) {
  if (outputPath.includes("/decks/")) return

  document.querySelectorAll("pre code").forEach((code) => {
    const pre = code.parentElement
    // Make pre focusable (see issue #101)
    pre.tabIndex = -1

    const copyButton = document.createElement("button")
    copyButton.type = "button"
    // .hidden as a fallback if browser doesn't support Clipboard API.
    // The class will be removed client-side if the browser supports the API.
    copyButton.classList.add("copy-code-button", "hidden")
    copyButton.textContent = "Copy"

    const wrapper = document.createElement("div")
    wrapper.className = "copy-code-wrapper"

    wrapper.appendChild(pre.cloneNode(true))
    wrapper.appendChild(copyButton)

    // Replace the pre with the new wrapper
    pre.parentElement.replaceChild(wrapper, pre)
  })
}

/**
 * The Red Hat fonts compose character sequences containing diacritics.
 * For example, the fonts render the sequence "\`a" as "à" and "\` " as "`".
 *
 * This is a problem because I'll be using backticks in `<code>`s
 * (inline or block) to delimit template literals.
 *
 * I've not found a way to disable this composition in CSS,
 * except by doing the following:
 * 1. Wrap the diacritic in an element (e.g. a `<span>`) to target it in CSS.
 * 2. Specify a width on the wrapper (1ch). The wrapper must be *blockified*
 *   for this to work.
 *
 * One issue with this is that a gap appears when the code is selected,
 * as if the wrapper is not part of the selection, even though it is.
 *
 * It's worth mentioning that I'm only concerned about the backtick
 * (the "grave accent" diacritic), because, so far, it's the only one
 * I'm using in `<code>`s.
 *
 * @type {HTMLSubTransform}
 */
function preventCharacterComposition({ document }, outputPath) {
  document.querySelectorAll("code").forEach((code) => {
    code.innerHTML = code.innerHTML.replace(
      /`/g,
      '<span class="inline-block w-[1ch]">`</span>'
    )
    if (outputPath.includes("/decks/")) {
      // Prevent Reveal from escaping the HTML <span>
      code.setAttribute("data-noescape", "")
    }
  })
}

/**
 * @callback Transform
 * @param {string} content
 * @param {string} outputPath
 * @returns {string|Promise<string>}
 */

/**
 * @callback HTMLSubTransform
 * @param {import('jsdom').DOMWindow} window
 * @param {string} outputPath
 * @returns {void}
 */
