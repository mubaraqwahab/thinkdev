module.exports = {
  layout: "layouts/presentation",
  eleventyComputed: {
    title: (data) => {
      `data.collections.lessons`
      const sn = +data.page.fileSlug.slice(0, 2)
      const lesson = data.collections.lessons[sn]
      return `Slide ${sn}: ${lesson.title}`
    }
    permalink: (data) => `/lessons/${data.page.fileSlug}/slides/`
  }
}
