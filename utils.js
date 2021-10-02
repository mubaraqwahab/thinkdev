// @ts-check

const htmlmin = require("html-minifier")
const babel = require("@babel/core")
const terser = require("terser")

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

    /**
     * Sort an array in ascending order. Doesn't modify the array.
     * To sort in descending order, reverse the return value
     *
     * @param {Array} array
     * @param {string} path
     * @return {Array} The sorted array
     *
     * @example
     * const array = [
     *   { name: { first: 'Wahab', ... }, ... },
     *   { name: { first: 'Mubaraq', ... }, ... },
     * ]
     * const sorted = arraySort(array, "name.first")
     */
    arraySort(array, path) {
      const key = pathkey(path)
      return array.slice().sort((a, b) => key(a) - key(b))
    },

    /**
     * @example
     * const elem = find(array, "name.first", "Mubaraq")
     */
    find(array, path, value) {
      const key = pathkey(path)
      return array.find((elem) => key(elem) === value)
    },
  },
}

function pathkey(path) {
  const props = path.split(".")
  const key = (val) => props.reduce((acc, prop) => acc[prop], val)
  return key
}
