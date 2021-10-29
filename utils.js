// @ts-check

const htmlmin = require("html-minifier-terser")
const babel = require("@babel/core")
const postcss = require("postcss").default
const tailwindcss = require("tailwindcss")
const resolveTailwindConfig = require("tailwindcss/resolveConfig")
const autoprefixer = require("autoprefixer")
const kebabCase = require("kebab-case")

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
        presets: [
          [
            "@babel/preset-env",
            // Don't transform ES import/export
            { modules: false },
          ],
        ],
      })
      return transpiled.code
    },

    /**
     * Process a CSS string with Post CSS
     *
     * @param {string} css
     * @param {"default"|"slides"} preset
     *  This option specifies whether to process `css` using the
     *  (custom) default config for CSS, or using the config specific
     *  to CSS for the slides. If this is omitted, the default config is used.
     */
    postcss(css, preset = "default") {
      const slidesTailwindConfig = resolveTailwindConfig({
        purge: ["src/_includes/layouts/slides.njk", "src/lessons/**/slides.md"],
        mode: "jit",
        darkMode: false,
        theme: {
          extend: {},
        },
        variants: {
          extend: {},
        },
        plugins: [],
      })

      return postcss([
        preset === "slides" ? tailwindcss(slidesTailwindConfig) : tailwindcss,
        autoprefixer,
      ]).process(css).css
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

    // This is for debugging
    prop(obj, path) {
      return pathkey(path)(obj)
    },

    /**
     * Convert a JS value into a JSON string.
     * @param {any} value
     * @param {number} [space]
     * @return {string}
     */
    jsonStringify(value, space = 0) {
      return JSON.stringify(value, undefined, space)
    },

    /**
     * Convert a JSON string into an object.
     * @param {string} text
     * @return {any}
     */
    jsonParse(text) {
      return JSON.parse(text)
    },

    /**
     * Transform an object map into a space-delimited string
     * of HTML attribute name-value pairs.
     *
     * This function will yield an invalid result if any of
     * the attribute values contains a double quote (").
     *
     * @param {Record<string, string|number>} obj
     *
     * @example
     * htmlAttrs({ module: "", href: "hey.html", ariaHidden: "true" })
     * //=> module="" href="hey.html" aria-hidden="true"
     */
    htmlAttrs(obj) {
      let result = ""
      for (const prop in obj) {
        const attr = kebabCase(prop)
        result += `${result ? " " : ""}${attr}="${obj[prop]}"`
      }
      return result
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
