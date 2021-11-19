// @ts-check

/**
 * @file
 * This script generates PDF files for the HTML slides.
 * Run it as part of the production build process,
 * only after templates have been rendered to `_site/`.
 *
 * It launches a temporary server for the `_site/` dir
 * and then runs puppeteer to print the HTML slides from the server
 */

const fs = require("fs/promises")
const http = require("http")
const handler = require("serve-handler")
const puppeteer = require("puppeteer")

const TEMP_PORT = 3000
const TEMP_URL = `http://localhost:${TEMP_PORT}`

const server = http.createServer((request, response) => {
  return handler(request, response, {
    public: "_site",
    cleanUrls: true,
  })
})

server.listen(TEMP_PORT, async () => {
  try {
    console.log(`Running temp server at ${TEMP_URL}`)

    const browser = await puppeteer.launch()

    const slidesDirContent = await fs.readdir("_site/slides")
    const slidesList = slidesDirContent.filter((name) => !name.includes("."))

    await Promise.all(
      slidesList.map(async (slidesName) => {
        const page = await browser.newPage()
        await page.goto(`${TEMP_URL}/slides/${slidesName}/?print-pdf`)
        await page.waitForNetworkIdle({ timeout: 1000 })

        const pdfPath = `_site/slides/${slidesName}.pdf`
        await page.pdf({
          path: pdfPath,
          printBackground: true,
          preferCSSPageSize: true,
          landscape: true,
        })
        console.log(`Generated PDF for ${slidesName} at ${pdfPath}`)
      })
    )

    await browser.close()
  } catch (e) {
    console.error(e)
  } finally {
    // Destroy the server
    process.exit()
  }
})
