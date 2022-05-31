// @ts-check

const windowURL = new URL(window.location.href)
if (windowURL.searchParams.has("print-pdf")) {
  // Just so I don't have to manually rename the pdf
  document.title = "{{ page.fileSlug }}"

  // Rewrite all local anchor URLs to prod site URL when printing.
  /** @type {NodeListOf<HTMLAnchorElement>} */
  const localAnchors = document.querySelectorAll('a[href^="/"]')

  localAnchors.forEach((anchor) => {
    const anchorURL = new URL(anchor.href)
    const url = new URL("{{ site.url }}")

    // Set the url props, except the origin, to the anchor's.
    url.pathname = anchorURL.pathname
    url.hash = anchorURL.hash
    url.search = anchorURL.search

    // Point the href to the prod site.
    anchor.href = url.href
  })
}
