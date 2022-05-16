/**
 * @file
 * Custom MarkdownIt library.
 */

// @ts-check

const html = require("plain-tag")
const markdownIt = require("markdown-it")
const markdownItAttrs = require("markdown-it-attrs")
const markdownItBracketedSpans = require("markdown-it-bracketed-spans")

const {requiredEnv} = require("./shared")

const markdownLib = markdownIt({html: true, typographer: true})
  .use(markdownItBracketedSpans)
  .use(markdownItAttrs)
  .use(markdownItYouTubeEmbed)

module.exports = markdownLib

/**
 * Convert YouTube video URLs to embeds.
 * The URL must be the short version (e.g. https://youtu.be/...)
 * and it must be the only text in it's paragraph.
 *
 * The embedded video will be sourced from the youtube-nocookie.com domain.
 *
 * @param {import("markdown-it")} md
 */
function markdownItYouTubeEmbed(md) {
  md.renderer.rules.paragraph_open = (tokens, idx, options, env, self) => {
    const ytURLRegex = /^https:\/\/youtu.be\/([a-zA-Z0-9_-]+)$/

    const nextToken = tokens[idx + 1]
    const nextNextToken = tokens[idx + 2]
    let ytVideoId, textToken

    if (
      nextToken.type === "inline" &&
      nextNextToken.type === "paragraph_close" &&
      (textToken = nextToken.children[0]) &&
      (ytVideoId = textToken.content.match(ytURLRegex)?.[1])
    ) {
      // Ignore the next text token and the </p>
      textToken.content = ""
      nextNextToken.attrSet("data-yt-ignore", "")

      return ytPlayerMarkup(ytVideoId)
    } else {
      return self.renderToken(tokens, idx, options)
    }
  }

  md.renderer.rules.paragraph_close = (tokens, idx, options, env, self) => {
    const token = tokens[idx]
    if (token.attrGet("data-yt-ignore") !== null) {
      return ""
    } else {
      return self.renderToken(tokens, idx, options)
    }
  }
}

/**
 * @param {string} ytVideoId
 * @returns {string}
 */
function ytPlayerMarkup(ytVideoId) {
  const origin = /** @type {string} */ (
    process.env.CONTEXT === "production"
      ? process.env.URL
      : requiredEnv("DEPLOY_PRIME_URL")
  )

  const ytPlayerParams = new URLSearchParams({
    // Hide YouTube logo when playing video (for cleaner UI)
    modestbranding: "1",
    // Show related videos, if at all, from the same channel
    rel: "0",
    // Play inline by default on iOS
    playsinline: "1",
    // Allow controlling the player via JS
    enablejsapi: "1",
    origin,
  })

  return html`<div class="youtube-player-wrapper">
    <iframe
      width="560"
      height="315"
      src="https://www.youtube-nocookie.com/embed/${ytVideoId}?${ytPlayerParams}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      class="youtube-player"
      id="yt-${ytVideoId}"
    ></iframe>
  </div>`
}
