// @ts-check

const plugin = require("tailwindcss/plugin")
const { fontFamily } = require("tailwindcss/defaultTheme")

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
    "utils/markdown-it.js",
    "!src/_includes/layouts/slides.njk",
    "!src/slides/**/*.md",
  ],
  theme: {
    extend: {
      container: (theme) => ({
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
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-lead": theme("colors.gray.800"),
            // from github.css higlight theme
            "--tw-prose-pre-code": "#24292e",
            "--tw-prose-pre-bg": theme("colors.gray.100"),
            "--tw-prose-invert-body": theme("colors.gray.300"),
            "--tw-prose-invert-lead": theme("colors.gray.200"),
            "--tw-prose-invert-pre-bg": theme("colors.gray.800"),

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
            cite: {
              fontStyle: "normal",
            },
            // Inspired by GitHub's rendering
            kbd: {
              display: "inline-block",
              padding: `${theme("spacing.px")} ${theme("spacing.1")}`,
              borderWidth: theme("borderWidth.DEFAULT"),
              borderRadius: theme("borderRadius.DEFAULT"),
              lineHeight: theme("lineHeight.tight"),
              ...codeLike(theme),
            },
            // Style like strong
            "b:not(.lead)": {
              fontWeight: theme("fontWeight.semibold"),
              color: "var(--tw-prose-bold)",
            },

            '[class~="lead"]': {
              fontWeight: 'theme("fontWeight.normal")',
            },
            '[class~="note"]': {
              borderWidth: "1px",
              borderLeftWidth: "5px",
              borderLeftStyle: "dashed",
              borderRadius: theme("borderRadius.DEFAULT"),
              padding: `${theme("spacing.2")} ${theme("spacing.5")}`,
              margin: `${theme("spacing.5")} 0`,
              "& :first-child": {
                marginTop: 0,
              },
              "& :last-child": {
                marginBottom: 0,
              },
            },
            '[class~="note-info"]': {
              borderColor: theme("colors.blue.400"),
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
            '[class~="note-info"]': {
              borderColor: theme("colors.blue.500"),
            },
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
