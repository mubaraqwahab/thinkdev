// @ts-check

module.exports = {
  title: "Think Like a Developer",
  shortTitle: "thinkdev",
  description:
    "Let's relearn the basics of programming with the world's most popular language, JavaScript.",
  author: {
    name: "Mubaraq Wahab",
    url: "https://github.com/mubaraqwahab",
  },
  url: requiredEnv("URL"),
  repoUrl: requiredEnv("REPOSITORY_URL"),
  deployBranch: requiredEnv("HEAD"),
  environment: process.env.NODE_ENV,
}

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
