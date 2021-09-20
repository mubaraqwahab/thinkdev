// @ts-check

const { lessonSlug } = require("../../../utils")

module.exports = {
  layout: "layouts/presentation",
  eleventyComputed: {
    title: (data) => {
      const index = data.page.fileSlug.slice(0, 2) - 1
      const lesson = data.lessons[index]
      return lesson.title
    },
    permalink: (data) => {
      const slug = lessonSlug({ title: data.title }, data.lessons)
      return `/lessons/${slug}/slides/`
    },
  },
}
