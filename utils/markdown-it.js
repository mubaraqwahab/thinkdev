/**
 * @file
 * Custom MarkdownIt plugins.
 */

// @ts-check

const html = require("plain-tag")
const markdownIt = require("markdown-it")
const markdownItAttrs = require("markdown-it-attrs")
const markdownItBracketedSpans = require("markdown-it-bracketed-spans")

// Allow markdown attributes (See https://www.11ty.dev/docs/languages/markdown/#add-your-own-plugins)
const markdownLib = markdownIt({ html: true })
  .use(markdownItBracketedSpans)
  .use(markdownItAttrs)
  .use(markdownItYouTubeEmbed)

module.exports = markdownLib

/**
 * Convert YouTube video URLs to embeds.
 * The URL must be the short version (e.g. https://youtu.be/...)
 * and it must be the only text in it's paragraph.
 * (Technically, the parent doesn't have to be a paragraph.)
 *
 * @param {import("markdown-it")} md
 */
function markdownItYouTubeEmbed(md) {
  const defaultRenderer = md.renderer.rules.text
  md.renderer.rules.text = (tokens, idx, ...rest) => {
    const token = tokens[idx]
    const ytRegex = /^https:\/\/youtu.be\/([a-zA-Z0-9_-]+)$/
    const ytVideoId = token.content.match(ytRegex)?.[1]

    if (ytVideoId) {
      return html`<div class="youtube-player-wrapper">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/${ytVideoId}"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="youtube-player"
        ></iframe>
      </div>`
    }

    return defaultRenderer(tokens, idx, ...rest)
  }
}
