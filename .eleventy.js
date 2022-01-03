// @ts-check

const fs = require("fs")
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation")
const markdownIt = require("markdown-it")
const markdownItAttrs = require("markdown-it-attrs")
const markdownItBracketedSpans = require("markdown-it-bracketed-spans")
const html = require("plain-tag")
const filters = require("./filters.js")
const transforms = require("./transforms.js")

/**
 * @param {import('@11ty/eleventy/src/EleventyConfig')} eleventyConfig
 * @returns {Partial<ReturnType<import('@11ty/eleventy/src/defaultConfig')>>}
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin)

  // Allow markdown attributes (See https://www.11ty.dev/docs/languages/markdown/#add-your-own-plugins)
  const markdownLib = markdownIt({ html: true })
    .use(markdownItBracketedSpans)
    .use(markdownItAttrs)
    .use(markdownItYouTubeEmbed)

  eleventyConfig.setLibrary("md", markdownLib)

  // See https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true)

  eleventyConfig.addTransform("autolinkheadings", transforms.autolinkHeadings)
  if (process.env.NODE_ENV === "production") {
    eleventyConfig.addTransform("minifyhtml", transforms.minifyHTML)
  }

  for (const filter in filters) {
    if (filter.endsWith("Async")) {
      eleventyConfig.addNunjucksAsyncFilter(
        filter.slice(0, -5).toLowerCase(),
        filters[filter]
      )
    } else {
      eleventyConfig.addNunjucksFilter(filter.toLowerCase(), filters[filter])
    }
  }

  eleventyConfig.addShortcode("now", () => new Date().toISOString())

  eleventyConfig.addPassthroughCopy({
    "node_modules/bootstrap-icons/bootstrap-icons.svg":
      "assets/images/bootstrap-icons.svg",
    // Stuff for Reveal.js
    "node_modules/reveal.js/dist/": "reveal/dist/",
    "node_modules/reveal.js/plugin/highlight/": "reveal/plugin/highlight/",
    "node_modules/highlight.js/styles/github.css":
      "reveal/plugin/highlight/github.css",
    "node_modules/highlight.js/styles/github-dark-dimmed.css":
      "reveal/plugin/highlight/github-dark-dimmed.css",
  })

  // Keep directory structure for these
  eleventyConfig.addPassthroughCopy("src/assets/images/")
  eleventyConfig.addPassthroughCopy("src/slides/*.pdf")
  eleventyConfig.addPassthroughCopy("src/favicon.*")
  eleventyConfig.addPassthroughCopy("src/android-chrome-*.png")
  eleventyConfig.addPassthroughCopy("src/apple-touch-icon.png")

  eleventyConfig.addWatchTarget("src/main.css")
  eleventyConfig.addWatchTarget("tailwind.config.js")

  eleventyConfig.setBrowserSyncConfig({
    // Watch and serve even when offline
    online: false,
    // 404 page routing (see https://www.11ty.dev/docs/quicktips/not-found/)
    callbacks: {
      ready: function (err, bs) {
        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync("_site/404.html")
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" })
          res.write(content_404)
          res.end()
        })
      },
    },
  })

  return {
    dir: {
      input: "src/",
      includes: "_includes/", // Relative to input folder
      data: "_data/", // Relative to input folder
      output: "_site/",
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  }
}

/**
 * MarkdownIt plugin to convert YouTube video URLs to embeds.
 * The URL must be the short version (e.g. https://youtu.be/...)
 * and it must be the only text in it's paragraph.
 * (Technically, the parent doesn't have to be a paragraph.)
 *
 * @param {markdownIt} md
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
