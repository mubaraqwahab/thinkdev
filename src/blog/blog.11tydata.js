// @ts-check

module.exports = {
  layout: "layouts/post",
  tags: ["post"],
  eleventyComputed: {
    title: (data) => data.title + (data.draft ? " (Draft)" : ""),
  },
}
