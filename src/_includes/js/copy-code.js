// @ts-check

const copyCodeButtons =
  /** @type {NodeListOf<HTMLButtonElement>} */
  (document.querySelectorAll(".copy-code-button"))

copyCodeButtons.forEach((copyButton) => {
  if (!navigator?.clipboard?.writeText) return

  // Browser supports Clipboard API; remove fallback .hidden class
  copyButton.classList.remove("hidden")

  copyButton.addEventListener("click", copyHandler)

  async function copyHandler() {
    const codeEl = copyButton.parentElement.querySelector("pre code")
    const code = codeEl.textContent

    await navigator.clipboard.writeText(code)

    copyButton.textContent = "Copied!"
    // Disable the copy button once copied
    copyButton.disabled = true

    // Reset the button state after a timeout
    setTimeout(() => {
      copyButton.textContent = "Copy"
      copyButton.disabled = false
    }, 2000)
  }
})
