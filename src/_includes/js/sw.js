const CACHE_PREFIX = "{{ site.shortTitle }}-"
const CACHE_NAME = CACHE_PREFIX + "{% now %}"
const OFFLINE_PAGE = "/offline.html"

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) =>
        cache.addAll([
          OFFLINE_PAGE,
          "/main.css",
          "/assets/images/thinkdev.svg",
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
    (async () => {
      const currentCache = await caches.open(CACHE_NAME)
      const cacheNames = await caches.keys()
      const isOldCacheName = (cacheName) => cacheName !== CACHE_NAME
      await filteredMap(cacheNames, isOldCacheName, async (oldCacheName) => {
        const oldCache = await caches.open(oldCacheName)
        const requests = await oldCache.keys()
        await filteredMap(
          requests,
          async (request) => {
            // Pick only specific request types that haven't been cached.
            // The regex below intentionally omits binary images to reduce data usage.
            // (This also helps to clean up the cache.)
            return (
              !(await currentCache.match(request)) &&
              /(\/|\.html|\.css|\.js|\.svg|\.woff2)$/.test(request.url)
            )
          },
          async (request) => await fetchResource(request)
        )
        await caches.delete(oldCacheName)
      })
    })()
  )

  // Idk what this does, lol, but I got it from https://web.dev/offline-fallback-page/#the-service-worker-code
  self.clients.claim()
})

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || !event.request.url.startsWith("http")) {
    return
  }

  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME)

      // Use the network-first strategy for webpages except decks
      // The decks rarely change so they will be served offline-first instead.
      if (
        event.request.mode === "navigate" &&
        !event.request.url.includes("/decks/")
      ) {
        try {
          return await fetchResource(event.request)
        } catch (e) {
          // If the request failed (as in a network failure)
          // show cached page, if any, or offline fallback
          return (
            (await cache.match(event.request)) ||
            (await cache.match(OFFLINE_PAGE))
          )
        }
      }

      // Use the offline-first strategy for decks and other resources
      else {
        // Returned the cached resource, if any
        const cachedResource = await cache.match(event.request)
        if (cachedResource) return cachedResource

        try {
          return await fetchResource(event.request)
        } catch (e) {
          // For decks only
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

/**
 *
 * Filter then map an array, both asynchronously.
 *
 * @template T
 * @template U
 *
 * @param {Array<T>} array
 * @param {(item: T, index: number) => boolean|Promise<boolean>} predicate
 * @param {(item: T, index: number) => U|Promise<U>} mapper
 *
 * @returns {Promise<Array<U>>}
 */
function filteredMap(array, predicate, mapper) {
  return array.reduce(async (accPromise, item, index) => {
    const acc = await accPromise
    if (await predicate(item, index)) {
      const mapped = await mapper(item, index)
      return [...acc, mapped]
    }
    return acc
  }, Promise.resolve([]))
}
