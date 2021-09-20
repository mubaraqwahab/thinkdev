const { lessonSlug } = require("../../utils")

module.exports = {
  layout: "layouts/presentation",
  eleventyComputed: {
    title: (data) => {
      const serialNo = data.page.fileSlug.slice(0, 2)
      const lesson = data.lessons[+serialNo]
      return `${serialNo} ${lesson.title}`
    },
    permalink: (data) => {
      const slug = lessonSlug({ title: data.title }, data.lessons)
      return `/lessons/${slug}/slides/`
    },
  },
}
