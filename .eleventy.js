// @ts-check

// Read from .env in development. (Netlify will provide env vars elsewhere)
if (!process.env.CONTEXT) require("dotenv").config()

// For debugging; don't remove!
const envVars = ["CONTEXT", "REPOSITORY_URL", "HEAD", "URL", "DEPLOY_PRIME_URL"]
for (const envVar of envVars) {
  console.log(`${envVar}=${process.env[envVar]}`)
}
// End for debugging

const eleventyNavigationPlugin = require("@11ty/eleventy-navigation")

const filters = require("./utils/filters.js")
const transforms = require("./utils/transforms.js")
const markdownLib = require("./utils/markdown-it.js")

/**
 * @param {import('@11ty/eleventy/src/UserConfig')} eleventyConfig
 * @returns {Partial<ReturnType<import('@11ty/eleventy/src/defaultConfig')>>}
 */
module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventyNavigationPlugin)

  eleventyConfig.setLibrary("md", markdownLib)

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
    "public/*": "/",
    // For some reason, the pattern above doesn't copy subfolders.
    "public/assets/": "assets/",
    "public/decks/": "decks/",

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

  eleventyConfig.addWatchTarget("src/main.css")
  // This doesn't appear to work :(
  eleventyConfig.addWatchTarget("tailwind.config.js")

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
