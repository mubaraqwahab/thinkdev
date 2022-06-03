window.addEventListener("DOMContentLoaded", () => {
  const revealConfig = Reveal.getConfig()

  Reveal.addEventListener("autoanimate", (e) => {
    const prevSVGNode = e.fromSlide.querySelector("svg")
    const nextSVGNode = e.toSlide.querySelector("svg")

    if (!prevSVGNode || !nextSVGNode) return

    prevSVGNode
      .querySelectorAll("path[data-id]")
      .forEach((/** @type {SVGPathElement} */ prevPathNode) => {
        const pathId = prevPathNode.dataset.id
        const nextPathNode = nextSVGNode.querySelector(
          `path[data-id="${pathId}"]`
        )
        if (!nextPathNode) return

        const prevPath = SVG(prevPathNode)
        const nextPath = SVG(nextPathNode)

        // Disable the unnecessary default Revealtransform so that the next
        // path node starts in the same position as the prev path node.
        nextPath.node.style.setProperty("transform", "none", "important")

        const prevAttributes = prevPath.attr(["d"])
        const nextAttributes = nextPath.attr(["d"])

        console.log({pathId, prevAttributes, nextAttributes})

        nextPath
          .attr(prevAttributes)
          .animate({duration: revealConfig.autoAnimateDuration * 1000})
          .attr(nextAttributes)
      })
  })
})
