// @ts-check
// TODO: review and complete (accessibility, styling, ux, ...)
document.querySelectorAll(".copy-code-button").forEach((copyButton) => {
  if (!navigator?.clipboard?.writeText) return

  copyButton.classList.remove("hidden")
  copyButton.addEventListener("click", copyHandler)

  async function copyHandler() {
    const codeEl = copyButton.parentElement.querySelector("pre code")
    const code = codeEl.textContent

    await navigator.clipboard.writeText(code)
    copyButton.innerHTML = "Copied!"
    console.log(`Copied code to clipboard: ${code}`)
    copyButton.removeEventListener("click", copyHandler)

    setTimeout(() => {
      copyButton.innerHTML = "Copy"
      copyButton.addEventListener("click", copyHandler)
    }, 2000)
  }
})
