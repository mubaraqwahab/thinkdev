# thinkdev

[![Netlify Status](https://api.netlify.com/api/v1/badges/9ddd2dd2-868a-4d60-bd4b-ea7bf90df7e8/deploy-status)](https://app.netlify.com/sites/thinkdev/deploys)

Source code for the [_Think Like a Developer_ course website](https://thinkdev.netlify.app/).

## Built with

- [Eleventy](https://www.11ty.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [reveal.js](https://revealjs.com/) for the slides

## npm scripts

Run each script with `npm run script-name`.

<!-- prettier-ignore-start -->

**Script** | **Description**
-- | --
`start` | Runs Eleventy on template files, compiles CSS, and starts a live development server.
`build` | Creates an optimised production build of the site. (You have to set `NODE_ENV` to `"production"` though.)
`clear` | Deletes generated files and folders.
`format` | Formats files with [Prettier](https://prettier.io/).

<!-- prettier-ignore-end -->

## Random notes

* Horizontal slide should be separated by two lines, but vertical slides by a single line. For example:
  ```md
  <section>

  <section>

  ## Slide 1

  </section>

  <section>

  ## Slide 1.1

  </section>

  </section>


  <section>

  ## Slide 2

  </section>
  ```
  **Note:** this is just for aesthetics.
* It's fine to use the less than (`<`) and greater than (`>`) signs in markdown code fences. However, when you're using it in an "HTML code fence" (i.e. `<pre><code>`), you need to escape the signs (i.e., use `&lt;` and `&gt;`).