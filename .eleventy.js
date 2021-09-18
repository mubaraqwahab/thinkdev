const htmlmin = require("html-minifier")
const babel = require("@babel/core")
const terser = require("terser")

module.exports = function (eleventyConfig) {
  // See https://www.11ty.dev/docs/data-deep-merge/
  eleventyConfig.setDataDeepMerge(true)

  if (process.env.NODE_ENV === "production") {
    eleventyConfig.addTransform("minifyhtml", minifyHTML)
  }

  eleventyConfig.addNunjucksAsyncFilter("transpilejs", transpileJS)
  eleventyConfig.addNunjucksAsyncFilter("minifyjs", minifyJS)
  eleventyConfig.addNunjucksFilter("padstart", padStart)

  // Copy compiled CSS folder to output folder
  eleventyConfig.addPassthroughCopy("src/css/")

  // Copy Bootstrap's JS and icons to output folder
  eleventyConfig.addPassthroughCopy({
    "node_modules/bootstrap/dist/js/bootstrap.min.js": "js/bootstrap.min.js",
    "node_modules/bootstrap/dist/js/bootstrap.bundle.min.js":
      "js/bootstrap.bundle.min.js",
    "node_modules/bootstrap-icons/bootstrap-icons.svg":
      "images/bootstrap-icons.svg",
  })

  // Don't ignore files in .gitignore. Only use .eleventyignore
  // This is necessary since the compiled CSS file is git-ignored.
  eleventyConfig.setUseGitIgnore(false)

  // Watch and serve even when offline
  eleventyConfig.setBrowserSyncConfig({
    online: false,
  })

  return {
    // Some of these are the defaults!
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

function minifyHTML(content, outputPath) {
  const isProd = process.env.NODE_ENV === "production"
  if (isProd && outputPath.endsWith(".html")) {
    let minified = htmlmin.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      removeEmptyAttributes: true,
      collapseWhitespace: true,
    })
    return minified
  }
  return content
}

async function transpileJS(code, callback) {
  try {
    const transpiled = await babel.transformAsync(code, {
      presets: ["@babel/preset-env"],
    })
    callback(null, transpiled.code)
  } catch (error) {
    console.error("Babel error:", error)
    // Fail gracefully
    callback(null, code)
  }
}

async function minifyJS(code, callback) {
  try {
    const minified = await terser.minify(code)
    callback(null, minified.code)
  } catch (error) {
    console.error("Terser error", error)
    callback(null, code)
  }
}

/**
 *
 * @param {string} str
 * @param {number} maxLength
 * @param {string} fillString
 */
function padStart(str, maxLength, fillString) {
  return str.padStart(maxLength, fillString)
}
