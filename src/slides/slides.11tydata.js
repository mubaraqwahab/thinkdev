module.exports = {
  "layout": "layouts/presentation",
  eleventyComputed: {
    "permalink": (data) => `/lessons/${data.page.fileSlug}/slides/`
  }
}
