/** @type {import('tailwindcss').Config} */
const { colors: defaultColors } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(var(--color-primary) / <alpha-value>)',
        secondary: 'rgb(var(--color-secondary) / <alpha-value>)',
        white: 'rgb(var(--text-base) / <alpha-value>)',
        bagroundPrimary: 'rgb(var(--baground-primary) / <alpha-value>)',
        bagroundSecondary: 'rgb(var(--baground-secondary) / <alpha-value>)',
    },
    content: {
      moveRightIcon: "url('/assets/icons/move-right.svg')",
    }
  },
  plugins: [],
}
}