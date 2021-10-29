const CACHE_VERSION = "1"
const CACHE_NAME = "thinkdev-v" + CACHE_VERSION
const PRECACHE_URLS = ["/assets/css/main.css", "/offline.html"]

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  )
})

self.addEventListener("activate", (event) => {})

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches
      .match(event.request)
      .then((cached) => cached || fetch(event.request))
      .catch(() => {
        if (event.request.mode === "navigate") {
          console.log("////")
        }

        console.log(event.request.mode)

        caches.match("/offline.html")
      })
  )
})

function isPageRequest(request) {
  const pathname = new URL(event.request.url).pathname
  return pathname.endsWith(".html") || pathname.endsWith("/")
}

// const CACHE = "pwabuilder-offline-page"

// importScripts(
//   "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
// )

// const offlineFallbackPage = "offline.html"

// self.addEventListener("message", (event) => {
//   if (event.data && event.data.type === "SKIP_WAITING") {
//     self.skipWaiting()
//   }
// })

// self.addEventListener("install", async (event) => {
//   event.waitUntil(
//     caches.open(CACHE).then((cache) => cache.add(offlineFallbackPage))
//   )
// })

// if (workbox.navigationPreload.isSupported()) {
//   workbox.navigationPreload.enable()
// }

// workbox.routing.registerRoute(
//   new RegExp("/*"),
//   new workbox.strategies.StaleWhileRevalidate({
//     cacheName: CACHE,
//   })
// )

// self.addEventListener("fetch", (event) => {
//   if (event.request.mode === "navigate") {
//     event.respondWith(
//       (async () => {
//         try {
//           const preloadResp = await event.preloadResponse

//           if (preloadResp) {
//             return preloadResp
//           }

//           const networkResp = await fetch(event.request)
//           return networkResp
//         } catch (error) {
//           const cache = await caches.open(CACHE)
//           const cachedResp = await cache.match(offlineFallbackPage)
//           return cachedResp
//         }
//       })()
//     )
//   }
// })
