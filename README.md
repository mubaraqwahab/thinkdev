# thinkdev

[![Netlify Status](https://api.netlify.com/api/v1/badges/9ddd2dd2-868a-4d60-bd4b-ea7bf90df7e8/deploy-status)](https://app.netlify.com/sites/thinkdev/deploys)

Source code for the [<i>Think Like a Developer</i> course website](https://thinkdev.netlify.app/).

## Built with

- [Eleventy](https://www.11ty.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [reveal.js](https://revealjs.com/) for the slide decks

## npm scripts

Run each script with <code>npm run <var>&lt;script&gt;</var></code>.

<!-- prettier-ignore-start -->

**Script** | **Description**
-- | --
`start` | Runs Eleventy on template files, compiles CSS, and starts a live development server.
`build` | Creates an optimised production build of the site. (You have to set `NODE_ENV` to `"production"` though.)
`clear` | Deletes generated files and folders.
`format` | Formats files with [Prettier](https://prettier.io/).

<!-- prettier-ignore-end -->

## Random guidelines

* Avoid heading levels `h4` and lower; stick to `h1`, `h2`, and `h3`.

* Horizontal slides should be separated by two lines, but vertical slides by a single line. For example:
   ```md
   <section>

   <section>

   ## Slide 1

   </section>

   <section>

   ### Slide 1.1

   </section>

   </section>


   <section>

   ## Slide 2

   </section>
   ```
   **Note:** this is just for readability.

* It's fine to use the less than (&lt;) and greater than (&gt;) signs in markdown code fences. However, when you're using them in a `<pre><code>`, you need to use the HTML entities, `&lt;` and `&gt;`, instead.

* If you're using one of those slide fragment effects (e.g. `fade-up`) on a `<span>` or a similar element, add `.inline-block` to the element &mdash; the effect might not work without it.

* Always space out em dashes. That is, write <i>Hey &mdash; there</i> not <i>Hey&mdash;there</i>. Most style guides and literary works I've seen **don't** space them out, though some do. I'm choosing to go against this "norm" because the em dash in the Red Hat font (the website font) is short like an en dash and it's weird seeing an en dash not spaced out.

* Don't commit frequently to the main branch. Use pull requests to apply commits in batches instead. You don't want the service worker cache to be invalidated so often.

* Prefer the term "deck" or "slide deck" over "presentation" or "slides" when describing a unit (group, file) of slides.

* Mark up text input with the [`<kbd>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/kbd). For example, <i>Type \<kbd>Hello\</kbd></i>. However, for actual keys, add `.key` to the `<kbd>` element, as in <i>Press \<kbd class="key">Enter\</kbd></i>.

* Use `console.log` in sample codes to indicate what to output. Also use an adjacent comment (on the same line or a different line) to indicate what the output should be. Doing these ensures that the code "makes sense" in a JavaScript file and in the Node REPL. You may omit the `console.log` if you specify that the code should be run in the REPL. However, never use the prompt symbol!
