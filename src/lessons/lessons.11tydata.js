// @ts-check

module.exports = {
  layout: "layouts/lesson",
  tags: ["lesson"],
  eleventyComputed: {
    eleventyNavigation: (data) => {
      const base = "/lessons/"
      return {
        key: data.title,
        // Extract "01" from "/lessons/01-introduction/index" and zero-index it
        order: data.page.filePathStem.slice(base.length, base.length + 2) - 1,
        excerpt: data.excerpt,
        draft: data.draft, // could be true, false, or undefined
        title: data.title + (data.draft ? " (Draft)" : ""),
      }
    },
  },
}
