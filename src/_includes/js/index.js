// Enable tooltips (See https://getbootstrap.com/docs/5.1/components/tooltips/#example-enable-tooltips-everywhere)

const tooltipTriggerList = Array.from(
  document.querySelectorAll('[data-bs-toggle="tooltip"]')
)
const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => {
  // Set the title (if it's not present) to be same as aria-label.
  tooltipTriggerEl.title = tooltipTriggerEl.title || tooltipTriggerEl.ariaLabel
  return new bootstrap.Tooltip(tooltipTriggerEl)
})
