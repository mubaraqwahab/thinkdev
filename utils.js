// @ts-check

const htmlmin = require("html-minifier")
const babel = require("@babel/core")
const terser = require("terser")
const slugify = require("@sindresorhus/slugify")

module.exports = {
  minifyHTMLTransform,
  transpileJS,
  minifyJS,
  padStart,
  lessonSlug,
  strSlice,
}

/**
 * @callback FilterCallback
 * @param {any} a
 * @param {any} b
 */

/**
 * @typedef {object} Lesson
 * @property {string} title
 */

/* TRANSFORMS */

/**
 * Minify HTML
 * @param {string} content
 * @param {string} outputPath
 * @returns string
 */
function minifyHTMLTransform(content, outputPath) {
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

/* FILTERS */

/**
 * Transpile JavaScript
 * @param {string} code
 * @param {FilterCallback} callback
 */
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

/**
 * Minify JavaScript
 * @param {string} code
 * @param {FilterCallback} callback
 */
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
 * Pad a string from its start
 * @param {string} str
 * @param {number} maxLength
 * @param {string} fillString
 * @returns {string}
 */
function padStart(str, maxLength, fillString) {
  return str.padStart(maxLength, fillString)
}

/**
 * Slugify a lesson object.
 * The returned slug is generated from the lesson number and title.
 * @param {Lesson} lesson
 * @param {Array<Lesson>} lessons
 * @return {string}
 */
function lessonSlug(lesson, lessons) {
  const lessonNo = lessons.findIndex((l) => l.title === lesson.title) + 1
  return slugify(`${lessonNo.toString().padStart(2, "0")} ${lesson.title}`, {
    // Eleventy's slugify decamelizes. See https://github.com/11ty/eleventy/blob/master/src/Filters/Slugify.js
    decamelize: false,
  })
}

/**
 *
 * @param {string} str
 * @param {number} start
 * @param {number} end
 * @returns {string}
 */
function strSlice(str, start, end) {
  return str.slice(start, end)
}
