// CACHE_NAME will be automatically added to the top of this script

const OFFLINE_PAGE = "/offline.html"

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) =>
        cache.addAll([
          OFFLINE_PAGE,
          "/main.css",
          "/reveal/dist/reveal.css",
          "/reveal/plugin/highlight/github.css",
          "/reveal/plugin/highlight/github-dark-dimmed.css",
          "/reveal/dist/reveal.js",
          "/reveal/plugin/highlight/highlight.js",
        ])
      )
  )
  self.skipWaiting()
})

self.addEventListener("activate", (event) => {
  event.waitUntil(
    // Delete all previous caches
    caches.keys().then((keys) =>
      keys.map((key) => {
        if (/*key.startsWith(CACHE_PREFIX) && */ key !== CACHE_NAME) {
          return caches.delete(key)
        }
      })
    )
  )
  // Idk what this does, lol, but I got it from https://web.dev/offline-fallback-page/#the-service-worker-code
  self.client.claim()
})

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || !event.request.url.startsWith("http")) {
    return
  }

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME)

      // Use the network-first strategy for webpages except slides
      // The slides rarely change so they will be served offline-first instead.
      if (
        event.request.mode === "navigate" &&
        !event.request.url.includes("/slides/")
      ) {
        console.log("network-first", event.request.url)
        try {
          return await fetchResource(event.request)
        } catch (e) {
          // Show fallback page if the request failed
          // ("failed" as in a network failure)
          return await cache.match(OFFLINE_PAGE)
        }
      }

      // Use the offline-first strategy for slides and other resources
      else {
        console.log("offline-first", event.request.url)

        // Returned the cached resource, if any
        const cachedResource = await cache.match(event.request)
        if (cachedResource) return cachedResource

        try {
          return await fetchResource(event.request)
        } catch (e) {
          // For slides only
          if (event.request.mode === "navigate") {
            return await cache.match(OFFLINE_PAGE)
          }
        }
      }
    })()
  )
})

/**
 * Fetch a resource and cache the response if it's a good one
 */
async function fetchResource(request) {
  const cache = await caches.open(CACHE_NAME)
  const response = await fetch(request)
  if (response.ok) {
    await cache.put(request, response.clone())
  }
  return response
}
