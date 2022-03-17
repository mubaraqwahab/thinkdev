const scrollToTopLink = document.getElementById("scrollToTopLink")
const pageHeading = document.querySelector("h1")

const options = { threshold: 1.0 }

// I don't really understand this tbh;
// Copilot helped me out :)
const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      scrollToTopLink.classList.add("invisible", "opacity-0")
    } else {
      scrollToTopLink.classList.remove("invisible", "opacity-0")
    }
  })
}

// Observe when the pageHeading scrolls out of the viewport
const observer = new IntersectionObserver(callback, options)
observer.observe(pageHeading)
