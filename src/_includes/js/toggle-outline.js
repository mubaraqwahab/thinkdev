// @ts-check

const toggleBtn = document.getElementById("lessonsNavToggle")
const toggleIcon = toggleBtn.querySelector(".bi")
const outlineNav = document.getElementById(
  toggleBtn.getAttribute("aria-controls")
)

toggleBtn.addEventListener("click", () => {
  toggleBtn.ariaExpanded = toggleBtn.ariaExpanded === "true" ? "false" : "true"
  outlineNav.classList.toggle("hidden", toggleBtn.ariaExpanded === "false")
})
