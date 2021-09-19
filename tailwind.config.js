// @ts-check

/**
 * @type {import("tailwindcss/tailwind-config").TailwindConfig}
 */
module.exports = {
  purge: ["src/**/*.njk", "src/**/*.md", "src/**/*.js"],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    container: (theme) => ({
      center: true,
      padding: {
        DEFAULT: theme("spacing.4"),
        sm: theme("spacing.8"),
        md: theme("spacing.16"),
        // sm: "2rem",
        // lg: "4rem",
        // xl: "5rem",
        // '2xl': '6rem',
      },
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
