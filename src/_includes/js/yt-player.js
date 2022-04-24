// @ts-check

/**
 * Just to silence TS. (This is defined in meta.njk btw)
 * @type {Record<string, any>|undefined}
 * @global
 */
var thinkdev

// A map of iframe ids to players (for debugging)
window.thinkdev.ytPlayers = {}
// This is for the YouTube API to use
window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady

const SEEK_TIME_KEY = "ytSeekTime--" + location.pathname

loadIframePlayerAPI()

/**
 * Load the IFrame Player API code asynchronously.
 */
function loadIframePlayerAPI() {
  const script = document.createElement("script")
  script.src = "https://www.youtube.com/iframe_api"
  const firstScript = document.getElementsByTagName("script")[0]
  firstScript.parentNode.insertBefore(script, firstScript)
}

/**
 * The YouTube Iframe API will call this automatically when it's ready.
 */
function onYouTubeIframeAPIReady() {
  const iframes = document.querySelectorAll("iframe.youtube-player")

  iframes.forEach((iframe) => {
    const player = new YT.Player(iframe.id, {events: {onStateChange, onReady}})

    // Save player state before closing window, if playing
    window.addEventListener("beforeunload", () => {
      if (player.getPlayerState() === YT.PlayerState.PLAYING) {
        savePlayerState(player)
      }
    })
  })
}

/**
 * @type {YT.Events['onReady']}
 */
function onReady(e) {
  // Record the player in the ytPlayers map
  const player = e.target
  const iframeId = player.getIframe().id
  window.thinkdev.ytPlayers[iframeId] = player
}

/**
 * @type {YT.Events['onStateChange']}
 */
function onStateChange(e) {
  // See https://github.com/mubaraqwahab/thinkdev/issues/133
  // for the motivation of the code below.

  const player = e.target

  if (e.data === YT.PlayerState.PAUSED) {
    savePlayerState(player)
  } else if (e.data === YT.PlayerState.UNSTARTED) {
    restorePlayerState(player)
  } else if (e.data === YT.PlayerState.ENDED) {
    clearPlayerState(player)
  }
}

/**
 * Save the current seek time of the given player to local storage.
 * @param {YT.Player} player
 */
function savePlayerState(player) {
  const store = loadStore()
  store[player.getIframe().id] = player.getCurrentTime()
  dumpStore(store)
}

/**
 * Restore the given player to its previous seek time, if any.
 * @param {YT.Player} player
 */
function restorePlayerState(player) {
  const store = loadStore()
  const seekTime = store[player.getIframe().id]
  if (seekTime) {
    player.seekTo(seekTime, true)
  }
}

/**
 * Clear any previously saved seek time for the given player.
 * @param {YT.Player} player
 */
function clearPlayerState(player) {
  const store = loadStore()
  delete store[player.getIframe().id]
  dumpStore(store)
}

/**
 * @returns {Store}
 */
function loadStore() {
  return JSON.parse(localStorage.getItem(SEEK_TIME_KEY)) ?? {}
}

/**
 * @param {Store} store
 */
function dumpStore(store) {
  localStorage.setItem(SEEK_TIME_KEY, JSON.stringify(store))
}

/**
 * @typedef {Record<string, number>} Store
 */
