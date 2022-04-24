// @ts-check

const SEEK_TIME_KEY = "ytSeekTime-" + window.location.pathname

// These aren't for debugging; they must be in the global scope!
window.loadIframePlayerAPI = loadIframePlayerAPI
window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady

const playerIframeId = "youtubePlayer"
if (document.getElementById(playerIframeId)) {
  loadIframePlayerAPI()
}

/**
 * Load the IFrame Player API code asynchronously.
 *
 * This function allows me to choose to load the API
 * when I want and from where I want. This is important
 * for me because I only want to load the API in dev mode
 * when the "load player" btn is clicked (the one on the yt placeholder).
 * In prod however, the function will be called automatically.
 * @global
 */
function loadIframePlayerAPI() {
  const tag = document.createElement("script")
  tag.src = "https://www.youtube.com/iframe_api"
  const firstScriptTag = document.getElementsByTagName("script")[0]
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag)
}

/**
 * The YouTube Iframe API will call this automatically when it's ready.
 * @global
 */
function onYouTubeIframeAPIReady() {
  const player = new YT.Player(playerIframeId, {events: {onStateChange}})
  // @ts-ignore
  window.ytPlayer = player
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
    clearPlayerState()
  }
}

// Save player state before closing window, if playing
window.addEventListener("beforeunload", () => {
  const player = /** @type {YT.Player} */ (window.ytPlayer)
  if (player.getPlayerState() === YT.PlayerState.PLAYING) {
    savePlayerState(player)
  }
})

/**
 * Save the current seek time of the given player to local storage.
 * @param {YT.Player} player
 */
function savePlayerState(player) {
  const seekTime = player.getCurrentTime()
  localStorage.setItem(SEEK_TIME_KEY, JSON.stringify(seekTime))
}

/**
 * Restore the given player to its previous seek time, if any
 * @param {YT.Player} player
 */
function restorePlayerState(player) {
  const seekTime = JSON.parse(localStorage.getItem(SEEK_TIME_KEY))
  if (seekTime) {
    player.seekTo(seekTime, true)
  }
}

/**
 * Clear any previously saved seek time for the page's current player.
 */
function clearPlayerState() {
  localStorage.removeItem(SEEK_TIME_KEY)
}
