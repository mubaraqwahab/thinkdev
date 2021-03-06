// @ts-check

const {fontFamily} = require("tailwindcss/defaultTheme")

const codeLike = (theme) => ({
  color: "var(--tw-prose-code)",
  fontWeight: theme("fontWeight.semibold"),
  // this returns a tuple [fontSize, {lineHeight}]
  fontSize: theme("fontSize.sm")[0],
})

/**
 * @type {import("tailwindcss/tailwind-config").TailwindConfig}
 */
module.exports = {
  content: [
    "src/**/*.njk",
    "src/**/*.md",
    "src/**/*.js",
    "utils/**/*.js",
    "!src/_includes/layouts/deck.njk",
    "!src/decks/**/*.md",
  ],
  theme: {
    extend: {
      container: ({theme}) => ({
        center: true,
        padding: {
          DEFAULT: theme("spacing.4"),
          // sm: theme("spacing.8"),
          // lg: theme("spacing.16"),
          // xl: theme("spacing.24"),
        },
      }),
      fontFamily: {
        sans: ["'Red Hat Text'", ...fontFamily.sans],
        mono: ["'Red Hat Mono'", ...fontFamily.mono],
        display: ["'Red Hat Display'", "'Red Hat Text'", ...fontFamily.sans],
      },
      typography: ({theme}) => ({
        DEFAULT: {
          css: {
            "--tw-prose-body": theme("colors.gray.700"),
            "--tw-prose-lead": "var(--tw-prose-body)",
            "--tw-prose-bold": theme("colors.gray.900"),
            "--tw-prose-headings": "var(--tw-prose-bold)",
            "--tw-prose-code": "var(--tw-prose-bold)",
            "--tw-prose-pre-code": "#24292e", // from github.css higlight theme
            "--tw-prose-pre-bg": theme("colors.gray.100"),

            "--tw-prose-invert-body": theme("colors.gray.300"),
            "--tw-prose-invert-lead": "var(--tw-prose-invert-body)",
            "--tw-prose-invert-bold": theme("colors.gray.100"),
            "--tw-prose-invert-headings": "var(--tw-prose-bold)",
            "--tw-prose-invert-code": "var(--tw-prose-bold)",
            "--tw-prose-invert-pre-bg": theme("colors.gray.800"),

            // '--tw-prose-invert-links': '',
            // '--tw-prose-invert-counters': '',
            // '--tw-prose-invert-bullets': '',
            // '--tw-prose-invert-hr': '',
            // '--tw-prose-invert-quotes': '',
            // '--tw-prose-invert-quote-borders': '',
            // '--tw-prose-invert-captions': '',
            // '--tw-prose-invert-th-borders': '',
            // '--tw-prose-invert-td-borders': '',

            h1: {
              fontFamily: theme("fontFamily.display").join(", "),
              fontWeight: theme("fontWeight.black"),
            },
            h2: {
              scrollMarginTop: theme("spacing.20"),
            },
            h3: {
              scrollMarginTop: theme("spacing.20"),
            },
            "h2, h3": {
              // Heading permalinks
              a: {
                "--tw-prose-links": "var(--tw-prose-headings)",
                fontWeight: "inherit",
                textDecoration: "none",
                "&:hover": {
                  textDecoration: "underline",
                },
              },
            },
            pre: {
              borderRadius: theme("borderRadius.md"),
            },
            // Disable backticks
            code: {
              "&::before": {
                display: "none",
              },
              "&::after": {
                display: "none",
              },
            },
            // Style like code
            samp: codeLike(theme),
            kbd: {
              ...codeLike(theme),
              // For actual keys (and not text input) like Ctrl,
              // use the markup <kbd class="key">Ctrl</kbd>
              // (Inspired by GitHub's rendering)
              "&[class~='key']": {
                display: "inline-block",
                padding: `${theme("spacing.px")} ${theme("spacing.1")}`,
                borderWidth: theme("borderWidth.DEFAULT"),
                borderRadius: theme("borderRadius.DEFAULT"),
                lineHeight: theme("lineHeight.tight"),
              },
            },
            strong: {
              fontWeight: theme("fontWeight.semibold"),
            },
            // Style like strong
            "b:not([class~='lead'])": {
              fontWeight: theme("fontWeight.semibold"),
              color: "var(--tw-prose-bold)",
            },
            '[class~="lead"]': {
              fontWeight: 'theme("fontWeight.normal")',
            },
            cite: {
              fontStyle: "normal",
            },
          },
        },
        indigo: {
          css: {
            "--tw-prose-invert-links": theme("colors.indigo.300"),
          },
        },
        invert: {
          css: {
            kbd: {
              borderColor: theme("colors.gray.700"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
