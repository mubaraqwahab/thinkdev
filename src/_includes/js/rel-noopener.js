// It might be best to do this statically, but ...
// Add rel="noopener" to all external links
// (i.e. anchors whose hrefs starts with "http")
window.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll('a[href^="http"]').forEach((anchor) => {
    anchor.setAttribute("rel", "noopener")
  })
})
