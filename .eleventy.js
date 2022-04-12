// @ts-check

// Read from .env in development. (Netlify will provide env vars elsewhere)
if (process.env.NODE_ENV !== "production") require("dotenv").config()

const fs = require("fs")
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation")

const filters = require("./utils/filters.js")
const transforms = require("./utils/transforms.js")
const markdownLib = require("./utils/markdown-it.js")

/**
 * @param {import('@11ty/eleventy/src/EleventyConfig')} eleventyConfig
 * @returns {Partial<ReturnType<import('@11ty/eleventy/src/defaultConfig')>>}
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin)

  eleventyConfig.setLibrary("md", markdownLib)

  // See https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true)

  for (const transform in transforms) {
    eleventyConfig.addTransform(transform.toLowerCase(), transforms[transform])
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
  eleventyConfig.addPassthroughCopy("src/decks/*.pdf")
  eleventyConfig.addPassthroughCopy("src/favicon.*")
  eleventyConfig.addPassthroughCopy("src/android-chrome-*.png")
  eleventyConfig.addPassthroughCopy("src/apple-touch-icon.png")

  eleventyConfig.addWatchTarget("src/main.css")
  // This doesn't appear to work :(
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
