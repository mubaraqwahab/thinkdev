// @ts-check

const {
  minifyHTML,
  transpileJS,
  minifyJS,
  padStart,
  lessonSlug,
  strSlice,
} = require("./utils.js")

/**
 * @param {import('@11ty/eleventy/src/EleventyConfig')} eleventyConfig
 * @returns {Partial<ReturnType<import('@11ty/eleventy/src/defaultConfig')>>}
 */
module.exports = function (eleventyConfig) {
  // See https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true)

  if (process.env.NODE_ENV === "production") {
    eleventyConfig.addTransform("minifyhtml", minifyHTML)
  }

  eleventyConfig.addNunjucksAsyncFilter("transpilejs", transpileJS)
  eleventyConfig.addNunjucksAsyncFilter("minifyjs", minifyJS)
  eleventyConfig.addNunjucksFilter("padstart", padStart)
  eleventyConfig.addNunjucksFilter("lessonslug", lessonSlug)
  eleventyConfig.addNunjucksFilter("strslice", strSlice)

  // Copy Bootstrap icons to output folder
  eleventyConfig.addPassthroughCopy({
    "node_modules/bootstrap-icons/bootstrap-icons.svg":
      "images/bootstrap-icons.svg",
    "node_modules/reveal.js/dist/": "reveal/",
  })

  eleventyConfig.addWatchTarget("src/css/")

  // Watch and serve even when offline
  eleventyConfig.setBrowserSyncConfig({
    online: false,
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
