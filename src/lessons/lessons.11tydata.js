module.exports = {
  layout: "layouts/lesson",
  date: "Last Modified",
  tags: ["lessons"],
  eleventyComputed: {
    eleventyNavigation: (data) => {
      const base = "/lessons/"
      return {
        key: data.title,
        // Extract "01" from "/lessons/01-introduction/index" and zero-index it
        order: data.page.filePathStem.slice(base.length, base.length + 2) - 1,
        excerpt: data.excerpt,
        // This appears to be a only way to pass custom data to eleventyNavigation
        // Might as well stuff it up 🙃
        emoji: data.emoji,
      }
    },
  },
}
