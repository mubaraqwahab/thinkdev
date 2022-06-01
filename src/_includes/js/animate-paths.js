window.addEventListener("load", () => {
  Reveal.addEventListener("autoanimate", (e) => {
    const fromSVG = e.fromSlide.querySelector("svg")
    const toSVG = e.toSlide.querySelector("svg")
    if (fromSVG && toSVG) {
      console.log(e)

      // TODO: Set the path attrs to match the one in the from slide
      // (Do you need a reference to the paths?)

      // TODO: Animate to the actual attrs in toSVG slide.
      // (What's the duration?)
    }
  })
})
