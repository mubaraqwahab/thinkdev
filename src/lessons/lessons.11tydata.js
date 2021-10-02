module.exports = {
  layout: "layouts/lesson",
  date: "Last Modified",
  eleventyComputed: {
    order: (data) => {
      const base = "/lessons/"
      // Extract "01" from "/lessons/01-introduction/index" and zero-index it
      return data.page.filePathStem.slice(base.length, base.length + 2) - 1
    },
  },
}
