// @ts-check

const htmlmin = require("html-minifier-terser")
const babel = require("@babel/core")
const postcss = require("postcss").default
const tailwindcss = require("tailwindcss")
const autoprefixer = require("autoprefixer")

module.exports = {
  transforms: {
    minifyHTML(content, outputPath) {
      if (!outputPath.endsWith(".html")) return content

      const minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
        minifyCSS: true,
        minifyJS: true,
      })

      return minified
    },
  },

  filters: {
    babel(js) {
      const transpiled = babel.transform(js, {
        presets: ["@babel/preset-env"],
      })
      return transpiled.code
    },

    postcss(css) {
      return postcss([tailwindcss, autoprefixer]).process(css).css
    },

    /**
     * @param {Date} dateObj
     */
    shortDate(dateObj) {
      // TODO: locale?
      return Intl.DateTimeFormat([], {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }).format(dateObj)
    },

    /**
     * @param {Date} dateObj
     */
    isoString(dateObj) {
      return dateObj.toISOString()
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

    prop(obj, path) {
      return pathkey(path)(obj)
    },
  },
}

/**
 * Return a function that evaluates an object property path
 * @param {string} path
 *
 * @example
 * const key = pathkey("name.first")
 * const person = { name: { first: "Mubaraq", ... }, ... }
 * console.log(key(person))
 * //=> "Mubaraq"
 */
function pathkey(path) {
  const props = path.split(".")
  const key = (val) => props.reduce((acc, prop) => acc[prop], val)
  return key
}
