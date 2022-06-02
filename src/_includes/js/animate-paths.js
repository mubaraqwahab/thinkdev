// @ts-check

window.addEventListener("load", () => {
  Reveal.addEventListener("autoanimate", (e) => {
    const fromSVG = e.fromSlide.querySelector("svg")
    const toSVG = e.toSlide.querySelector("svg")
    if (fromSVG && toSVG) {
      /** @type {Svg} */
      const fromS = SVG(fromSVG)
      /** @type {Svg} */
      const toS = SVG(toSVG)

      const fromPath = fromS.findOne("[data-path-id]")
      const toPath = toS.findOne("[data-path-id]")

      toPath.node.style.setProperty("transform", "none", "important")

      const fromAttributes = fromPath.attr(["d"])
      const toAttributes = toPath.attr(["d"])

      toPath.attr(fromAttributes)

      toPath
        .animate({
          duration: 1000,
          delay: 500,
        })
        .attr(toAttributes)

      console.log({fromAttributes, toAttributes})

      // TODO: Set the path attrs to match the one in the from slide
      // (Do you need a reference to the paths?)

      // TODO: Animate to the actual attrs in toSVG slide.
      // (What's the duration?)
    }
  })
})

/**
 * @typedef {import("@svgdotjs/svg.js").Svg} Svg
 */

/**
 * @typedef {import("@svgdotjs/svg.js").Path} Path
 */
