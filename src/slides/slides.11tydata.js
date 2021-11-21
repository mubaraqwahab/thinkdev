// @ts-check

module.exports = {
  layout: "layouts/slides",
  tags: ["slides"],
  eleventyComputed: {
    order: (data) => {
      const base = "/slides/"
      // Extract "01" from "/slides/01-introduction/index" and zero-index it
      return data.page.filePathStem.slice(base.length, base.length + 2) - 1
    },
  },
}

const n = 5
const remark = n > 0 ? "positive" : n < 0 ? "negative" : "zero"
console.log(remark) // positive
