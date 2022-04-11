// @ts-check

module.exports = {
  layout: "layouts/deck",
  tags: ["deck"],
  eleventyComputed: {
    order: (data) => {
      const base = "/decks/"
      // Extract "01" from "/decks/01-introduction/index" and zero-index it
      return data.page.filePathStem.slice(base.length, base.length + 2) - 1
    },
  },
}
