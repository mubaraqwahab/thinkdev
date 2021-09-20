module.exports = {
  layout: "layouts/presentation",
  eleventyComputed: {
    title: (data) => {
      const serialNo = data.page.fileSlug.slice(0, 2)
      const lesson = data.lessons[+serialNo]
      return `${serialNo} ${lesson.title}`
    },
    permalink: (data) => `/lessons/${data.title}/slides/`
  }
}
