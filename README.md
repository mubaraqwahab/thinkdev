# Bootstrap + Eleventy Starter

This is a starter template for creating static websites with [Eleventy](https://www.11ty.dev) and [Bootstrap 5](https://getbootstrap.com/).

## Usage

You need to have [Node.js](https://nodejs.org/) installed first.

Click the "Use this template" button in this repository's homepage and clone the new repository that's created for you. Navigate into the cloned repo and &hellip;

```sh
# Install dependencies
npm install

# Start development server
npm start
```

## npm scripts

The following table shows some important npm scripts available in this starter. You can run each script with `npm run script-name`.

<!-- prettier-ignore-start -->

**Script** | **Description**
-- | --
`start` | Runs Eleventy on template files, compiles Sass into CSS and starts a live development server.
`build` | Creates an optimised production build of the site.
`clean` | Deletes generated files and folders.
`format` | Formats files with [Prettier](https://prettier.io/). Files will be formatted automatically when you commit; use this when you want format manually.

<!-- prettier-ignore-end -->

You can learn more about npm scripts in general from the CSS-Tricks article: [Why npm Scripts?](https://css-tricks.com/why-npm-scripts/)

### Under the hood

The starter uses these:

- [Autoprefixer](https://github.com/postcss/autoprefixer), a [PostCSS](https://postcss.org/) plugin, to automatically add relevant vendor prefixes to the compiled Sass output.
- [PurgeCSS](https://purgecss.com/) (through its PostCSS plugin) to remove unused CSS rules.
- [Babel](https://babeljs.io/) to transpile JS for older (relevant) browsers.
- [Terser](https://terser.org/) to minify JS.
- [Browserslist](https://github.com/browserslist/browserslist) (see `.browserslistrc` file) to specify supported browsers. Babel and Autoprefixer use this.
- [Husky](https://typicode.github.io/husky) to auto-format changed files with [Prettier](https://prettier.io/) whenever you commit. Only files with these extensions are formatted: `.js`, `.html`, `.css`, `.scss`, `.json`.

Check the respective documentations of the tools to learn more about them.

## See also

- [Bootstrap npm starter template](https://github.com/twbs/bootstrap-npm-starter)
- [ElevenTail](https://github.com/philhawksworth/eleventail), an Eleventy + [Tailwind CSS](https://tailwindcss.com/) starter
- [Things that a Build Process could & should do](https://build-process.netlify.app/)
