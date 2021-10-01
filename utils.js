// @ts-check

const htmlmin = require("html-minifier")
const babel = require("@babel/core")
const terser = require("terser")
const slugify = require("@sindresorhus/slugify")

module.exports = {
  transforms: {
    minifyHTML(content, outputPath) {
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
    },
  },

  filters: {
    async transpileJS(code, callback) {
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
    },

    async minifyJS(code, callback) {
      try {
        const minified = await terser.minify(code)
        callback(null, minified.code)
      } catch (error) {
        console.error("Terser error", error)
        callback(null, code)
      }
    },

    shortDate(dateObj) {
      // TODO: locale?
      return Intl.DateTimeFormat([], {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(dateObj)
    },
  },
}
