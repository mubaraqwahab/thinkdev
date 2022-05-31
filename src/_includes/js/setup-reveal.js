// @ts-check

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
)

/** @type {MotionConfig} */
const reducedMotionConfig = {
  transition: "none",
  autoAnimate: false,
}

/** @type {MotionConfig} */
const defaultMotionConfig = {
  transition: "slide",
  autoAnimate: true,
}

// See https://revealjs.com/config/
Reveal.initialize({
  hash: true,
  hashOneBasedIndex: false,
  navigationMode: "linear",
  plugins: [RevealHighlight],
  ...(prefersReducedMotion.matches ? reducedMotionConfig : defaultMotionConfig),
})

prefersReducedMotion.addEventListener("change", () => {
  console.log("change")
  if (prefersReducedMotion.matches) {
    Reveal.configure(reducedMotionConfig)
  } else {
    Reveal.configure(defaultMotionConfig)
  }
})

/**
 * @typedef {Pick<RevealOptions, "transition"|"autoAnimate">} MotionConfig
 */
