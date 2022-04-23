// @ts-check

/**
 * @file
 * Utilities shared with the src folder (i.e. in data files).
 */

/**
 * Use this for required environment variables.
 * If the variable is not set, it will log a warning.
 * @param {string} name
 * @returns {string|void}
 */
function requiredEnv(name) {
  return (
    process.env[name] ??
    console.warn(`Warning: Environment variable '${name}' not set.`)
  )
}

module.exports = {
  requiredEnv,
}
