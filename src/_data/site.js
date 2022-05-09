// @ts-check

const {requiredEnv} = require("../../utils/shared")

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
  context: requiredEnv("CONTEXT"),
}
