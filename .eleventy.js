// @ts-check

const fs = require("fs")
const util = require("util")
const markdownIt = require("markdown-it")
const markdownItAttrs = require("markdown-it-attrs")
const markdownItBracketedSpans = require("markdown-it-bracketed-spans")
const { filters, transforms } = require("./utils.js")

/**
 * @param {import('@11ty/eleventy/src/EleventyConfig')} eleventyConfig
 * @returns {Partial<ReturnType<import('@11ty/eleventy/src/defaultConfig')>>}
 */
module.exports = function (eleventyConfig) {
  // Allow markdown attributes (See https://www.11ty.dev/docs/languages/markdown/#add-your-own-plugins)
  const markdownLib = markdownIt({ html: true })
    .use(markdownItBracketedSpans)
    .use(markdownItAttrs)
  eleventyConfig.setLibrary("md", markdownLib)

  // See https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true)

  if (process.env.NODE_ENV === "production") {
    eleventyConfig.addTransform("minifyhtml", transforms.minifyHTML)
  }

  eleventyConfig.addNunjucksFilter("babel", filters.babel)
  eleventyConfig.addNunjucksFilter("postcss", filters.postcss)
  eleventyConfig.addNunjucksFilter("shortdate", filters.shortDate)
  eleventyConfig.addNunjucksFilter("isostring", filters.isoString)
  eleventyConfig.addNunjucksFilter("arraysort", filters.arraySort)
  eleventyConfig.addNunjucksFilter("find", filters.find)
  // For debugging
  eleventyConfig.addNunjucksFilter("prop", filters.prop)
  eleventyConfig.addNunjucksFilter("inspect", (obj) =>
    util.inspect(obj, { depth: 3 })
  )

  eleventyConfig.addPassthroughCopy({
    "node_modules/bootstrap-icons/bootstrap-icons.svg":
      "assets/images/bootstrap-icons.svg",
    // Stuff for Reveal.js
    "node_modules/reveal.js/dist/": "reveal/dist/",
    "node_modules/reveal.js/plugin/highlight/": "reveal/plugin/highlight/",
    "node_modules/highlight.js/styles/github-dark-dimmed.css":
      "reveal/plugin/highlight/github-dark-dimmed.css",
  })

  // Keep directory structure for these
  eleventyConfig.addPassthroughCopy("src/assets/images/")
  eleventyConfig.addPassthroughCopy("src/lessons/**/slides.pdf")
  eleventyConfig.addPassthroughCopy("src/favicon*")

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
