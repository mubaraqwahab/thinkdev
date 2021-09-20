// @ts-check

import htmlmin from "html-minifier"
import babel from "@babel/core"
import * as terser from "terser"
import slugify from "@sindresorhus/slugify"

// Get rid of slugify; no ES6!

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
export function minifyHTML(content, outputPath) {
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
export async function transpileJS(code, callback) {
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
export async function minifyJS(code, callback) {
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
export function padStart(str, maxLength, fillString) {
  return str.padStart(maxLength, fillString)
}

/**
 * Slugify a lesson object.
 * The returned slug is generated from the lesson number and title.
 * @param {Lesson} lesson
 * @param {Array<Lesson>} lessons
 * @return {string}
 */
export function lessonSlug(lesson, lessons) {
  const lessonNo = lessons.findIndex((l) => l.title === lesson.title) + 1
  return slugify(`${lessonNo.toString().padStart(2, "0")} ${lesson.title}`, {
    decamelize: false, // Eleventy's slugify decamelizes. See https://github.com/11ty/eleventy/blob/master/src/Filters/Slugify.js
  })
}
