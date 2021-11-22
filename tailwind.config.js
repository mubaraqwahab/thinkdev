// @ts-check

/**
 * @type {import("tailwindcss/tailwind-config").TailwindConfig}
 */
module.exports = {
  purge: [
    "src/**/*.njk",
    "src/**/*.md",
    "src/**/*.js",
    "!src/_includes/layouts/slides.njk",
    "!src/slides/**/*.md",
  ],
  mode: "jit",
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {
      // See https://github.com/tailwindlabs/tailwindcss-typography/issues/69#issuecomment-752946920
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '[class~="lead"]': {
              fontWeight: "normal",
            },
            '[class~="note"]': {
              borderLeftWidth: "5px",
              borderLeftStyle: "dashed",
              padding: `${theme("spacing.1")} ${theme("spacing.5")}`,
              margin: `${theme("spacing.5")} 0`,

              "& :first-child": {
                marginTop: 0,
              },
              "& :last-child": {
                marginBottom: 0,
              },
            },
            '[class~="note-info"]': {
              borderLeftColor: theme("colors.blue.400"),
            },
            cite: {
              fontStyle: "normal",
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
            samp: {
              color: theme("colors.gray.900"),
              fontWeight: theme("fontWeight.semibold"),
              // this returns a tuple [fontSize, {lineHeight}]
              fontSize: theme("fontSize.sm")[0],
            },
            pre: {
              // color from github.css higlight theme
              color: "#24292e",
              backgroundColor: theme("colors.gray.100"),
            },
            // Inspired by GitHub's rendering
            kbd: {
              display: "inline-block",
              padding: `${theme("spacing.px")} ${theme("spacing.1")}`,
              fontWeight: theme("fontWeight.semibold"),
              fontSize: theme("fontSize.sm")[0],
              lineHeight: theme("lineHeight.tight"),
              borderWidth: theme("borderWidth.DEFAULT"),
              borderRadius: theme("borderRadius.DEFAULT"),
              color: theme("colors.gray.900"),
            },
          },
        },
        light: {
          css: [
            {
              color: theme("colors.gray.400"),
              '[class~="lead"]': {
                color: theme("colors.gray.300"),
              },
              '[class~="note-info"]': {
                borderLeftColor: theme("colors.blue.500"),
              },
              a: {
                color: theme("colors.white"),
              },
              strong: {
                color: theme("colors.white"),
              },
              "ol > li::before": {
                color: theme("colors.gray.400"),
              },
              "ul > li::before": {
                backgroundColor: theme("colors.gray.600"),
              },
              hr: {
                borderColor: theme("colors.gray.600"),
              },
              blockquote: {
                color: theme("colors.gray.200"),
                borderLeftColor: theme("colors.gray.600"),
              },
              h1: {
                color: theme("colors.white"),
              },
              h2: {
                color: theme("colors.white"),
              },
              h3: {
                color: theme("colors.white"),
              },
              h4: {
                color: theme("colors.white"),
              },
              "figure figcaption": {
                color: theme("colors.gray.400"),
              },
              code: {
                color: theme("colors.white"),
              },
              "a code": {
                color: theme("colors.white"),
              },
              // Style like <code>
              samp: {
                color: theme("colors.white"),
              },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.gray.800"),
              },
              kbd: {
                color: theme("colors.white"),
                borderColor: theme("colors.gray.700"),
              },
              thead: {
                color: theme("colors.white"),
                borderBottomColor: theme("colors.gray.400"),
              },
              "tbody tr": {
                borderBottomColor: theme("colors.gray.600"),
              },
            },
          ],
        },
      }),
    },
    container: (theme) => ({
      center: true,
      padding: {
        DEFAULT: theme("spacing.4"),
        sm: theme("spacing.8"),
        lg: theme("spacing.16"),
        xl: theme("spacing.24"),
      },
    }),
  },
  variants: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
