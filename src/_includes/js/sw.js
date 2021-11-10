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
  if (
    !event.request.url.startsWith("http") ||
    event.request.method !== "GET" ||
    // Don't cache browser-sync stuff during development
    event.request.url.includes("/browser-sync/")
  ) {
    return
  }

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME)
      const requestMode = event.request.mode

      // Returned the cached resource, if any
      const cachedResource = await cache.match(event.request)
      if (cachedResource) return cachedResource

      try {
        // If it hasn't been cached, fetch from server
        const response = await fetch(event.request)

        // Cache the resource (a clone of the response)
        // only if it's a good one
        if (response.ok) {
          await cache.put(event.request, response.clone())
        }

        // Return the original response to the browser
        return response
      } catch (e) {
        // Show fallback page if the request was for a webpage
        // and it failed ("failed" as in a network failure)
        if (requestMode === "navigate") {
          return cache.match(OFFLINE_PAGE)
        }
      }
    })()
  )
})
