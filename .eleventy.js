// @ts-check

const fs = require("fs")
const yaml = require("js-yaml")
const markdownIt = require("markdown-it")
const markdownItAttrs = require("markdown-it-attrs")
const { filters, transforms } = require("./utils.js")

/**
 * @param {import('@11ty/eleventy/src/EleventyConfig')} eleventyConfig
 * @returns {Partial<ReturnType<import('@11ty/eleventy/src/defaultConfig')>>}
 */
module.exports = function (eleventyConfig) {
  // Allow markdown attributes (See https://www.11ty.dev/docs/languages/markdown/#add-your-own-plugins)
  const markdownLib = markdownIt({ html: true }).use(markdownItAttrs)
  eleventyConfig.setLibrary("md", markdownLib)

  // See https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true)

  eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents))

  if (process.env.NODE_ENV === "production") {
    eleventyConfig.addTransform("minifyhtml", transforms.minifyHTML)
  }

  eleventyConfig.addNunjucksAsyncFilter("transpilejs", filters.transpileJS)
  eleventyConfig.addNunjucksAsyncFilter("minifyjs", filters.minifyJS)
  eleventyConfig.addNunjucksFilter("shortdate", filters.shortDate)

  eleventyConfig.addPassthroughCopy({
    "node_modules/bootstrap-icons/bootstrap-icons.svg":
      "images/bootstrap-icons.svg",
    "node_modules/reveal.js/dist/": "reveal/dist/",
    "node_modules/reveal.js/plugin/highlight/": "reveal/plugin/highlight",
    "node_modules/highlight.js/styles/github.css":
      "reveal/plugin/highlight/github.css",
  })

  eleventyConfig.addWatchTarget("src/css/")

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
