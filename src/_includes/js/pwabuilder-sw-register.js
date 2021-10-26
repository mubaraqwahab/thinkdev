/*
 This code uses the pwa-update web component https://github.com/pwa-builder/pwa-update to register your service worker,
 tell the user when there is an update available and let the user know when your PWA is ready to use offline.
*/

import "https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate"

const el = document.createElement("pwa-update")
el.swpath = window.location.origin + "/pwabuilder-sw.js"
document.body.appendChild(el)
