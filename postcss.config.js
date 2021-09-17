const autoprefixer = require("autoprefixer")
const purgecss = require("@fullhuman/postcss-purgecss")

module.exports = ({ env }) => ({
  plugins: [
    autoprefixer,
    env === "production" &&
      purgecss({
        content: ["./src/**/*.njk"],
      }),
  ],
})
