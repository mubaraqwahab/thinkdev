// @ts-check

const util = require("util")
const babel = require("@babel/core")
const postcss = require("postcss").default
const tailwindcss = require("tailwindcss")
const resolveTailwindConfig = require("tailwindcss/resolveConfig")
const postcssNested = require("postcss-nested")
const autoprefixer = require("autoprefixer")
const kebabCase = require("kebab-case")
const terser = require("terser")

/**
 * @template T
 * @callback AsyncFilterCallback<T>
 * @param {any} error
 * @param {T} result
 * @returns {void}
 */

module.exports = {
  babel(js) {
    const transpiled = babel.transform(js, {
      presets: [
        [
          "@babel/preset-env",
          // Don't transform ES import/export
          {modules: false},
        ],
      ],
    })
    return transpiled.code
  },

  /**
   * Minify a string of JavaScript code.
   *
   * NOTE: Only use this when the code won't be output to
   * a `<script>`, because code in `<script>`s will already
   * be minified during transformation
   *
   * @param {string} js
   * @param {AsyncFilterCallback<string>} callback
   */
  async terserAsync(js, callback) {
    const minified = await terser.minify(js)
    return callback(null, minified.code)
  },

  /**
   * Process a CSS string with Post CSS
   *
   * @param {string} css
   * @param {"default"|"deck"} preset
   *  This option specifies whether to process `css` using
   *  the (custom) default config for CSS, or using the config
   *  specific to CSS for the slide decks.
   *  If this is omitted, the default config is used.
   */
  postcss(css, preset = "default") {
    const {fontFamily} = require("tailwindcss/defaultTheme")

    const deckTailwindConfig = resolveTailwindConfig({
      content: [
        "src/_includes/layouts/deck.njk",
        "src/decks/**/*.md",
        "utils/**/*.js",
      ],
      theme: {
        extend: {
          fontFamily: {
            sans: ["'Red Hat Text'", ...fontFamily.sans],
            mono: ["'Red Hat Mono'", ...fontFamily.mono],
            display: [
              "'Red Hat Display'",
              "'Red Hat Text'",
              ...fontFamily.sans,
            ],
          },
        },
      },
      plugins: [],
    })

    return postcss([
      ...(preset === "deck"
        ? [tailwindcss(deckTailwindConfig), postcssNested()]
        : [tailwindcss]),
      autoprefixer,
    ]).process(css).css
  },

  /**
   * @param {Date} dateObj
   */
  shortdate(dateObj) {
    return Intl.DateTimeFormat(["en-GB"], {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(dateObj)
  },

  /**
   * @param {Date} dateObj
   */
  isostring(dateObj) {
    return dateObj.toISOString()
  },

  /**
   * Sort an array of objects (in asc order) with a property path.
   * The path must evaluate to one of these:
   *  * a string for every object
   *  * a number for every object.
   * This returns the sorted array; it doesn't sort in-place.
   * To sort in descending order, reverse the return value.
   *
   * @param {Array} array
   * @param {string} path - The
   * @return {Array} The sorted array
   *
   * @example
   * const array = [
   *   { name: { first: 'Wahab', ... }, ... },
   *   { name: { first: 'Mubaraq', ... }, ... },
   * ]
   * const sorted = arraysort(array, "name.first")
   * //=> [
   * //=>   { name: { first: 'Mubaraq', ... }, ... },
   * //=>   { name: { first: 'Wahab', ... }, ... },
   * //=> ]
   */
  arraysort(array, path) {
    const key = pathkey(path)
    return array.slice().sort((a, b) => {
      const keyA = key(a)
      const keyB = key(b)
      if (typeof keyA === "string" && typeof keyB === "string") {
        return keyA.localeCompare(keyB)
      } else if (typeof keyA === "number" && typeof keyB === "number") {
        return keyA - keyB
      } else {
        const diagnostics = {a, b, keyA, keyB}
        console.error(
          `path '${path}' must evaluate to a number or string!\n`,
          diagnostics
        )
        return 0
      }
    })
  },

  /**
   * @example
   * const array = [
   *   { name: { first: 'Wahab', ... }, ... },
   *   { name: { first: 'Mubaraq', ... }, ... },
   * ]
   * const elem = find(array, "name.first", "Mubaraq")
   * //=> { name: { first: 'Mubaraq', ... }, ... }
   */
  find(array, path, value) {
    const key = pathkey(path)
    return array.find((elem) => key(elem) === value)
  },

  /**
   * Opposite of Nunjucks `dump`.
   * Convert a JSON string into an object.
   * @param {string} text
   * @return {any}
   */
  load(text) {
    return JSON.parse(text)
  },

  /**
   * Transform an object map into a space-delimited string
   * of HTML attribute name-value pairs.
   *
   * **NOTES:**
   * * This function will yield an invalid result if any of
   * the attribute values contains a double quote (").
   * * Always apply the `safe` filter after this filter,
   *   as in `{{ attrsObj | htmlattrs | safe }}`
   *
   * @param {Record<string, string|number>} obj
   *
   * @example
   * htmlattrs({ module: "", href: "hey.html", ariaHidden: "true" })
   * //=> 'module="" href="hey.html" aria-hidden="true"'
   */
  htmlattrs(obj) {
    let result = ""
    for (const prop in obj) {
      const attr = kebabCase(prop)
      result += `${result ? " " : ""}${attr}="${obj[prop]}"`
    }
    return result
  },

  /**
   * Serialize an object into a URL search (query) string.
   * @param {Record<string, string>} obj
   * @returns {string}
   *
   * @example
   * querystr({ foo: "bar", baz: "qux" })
   * //=> "?foo=bar&baz=qux"
   */
  querystr(obj) {
    const searchParams = new URLSearchParams(obj)
    return searchParams.toString()
  },

  // FOR DEBUGGING

  /** Get a property value from an object given it's path. */
  prop(obj, path) {
    return pathkey(path)(obj)
  },

  /**
   * Extract the `path` value from all objects in an array.
   * @param {Array<Record<string, any>>} array
   * @param {string} path
   * @returns {Array}
   *
   * @example
   * const array = [{ foo: 'bar' }, { foo: 'qux' }]
   * mapprop(array, 'foo')
   * //=> ['bar', 'qux']
   */
  mapprop(array, path) {
    return array.map(pathkey(path))
  },

  inspect(obj, depth = 3) {
    return util.inspect(obj, {depth})
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
