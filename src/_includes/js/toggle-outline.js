// @ts-check

const toggleBtn = document.getElementById("outlineToggle")
const toggleIcon = toggleBtn.querySelector(".bi")
const outlineNav = document.getElementById(
  toggleBtn.getAttribute("aria-controls")
)

toggleBtn.addEventListener("click", () => {
  toggleBtn.ariaExpanded = toggleBtn.ariaExpanded === "true" ? "false" : "true"
  toggleIcon.classList.toggle("rotate-90", toggleBtn.ariaExpanded !== "false")
  outlineNav.classList.toggle("hidden", toggleBtn.ariaExpanded === "false")
})
