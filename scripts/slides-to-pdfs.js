// Use DEPLOY_PRIME_URL || URL
// URL is always the URL of the site
// but DEPLOY_PRIME_URL works for deploy previews too

const puppeteer = require("puppeteer")

;(async () => {
  // This fails
  const browser = await puppeteer.launch({ headless: true })
})()
