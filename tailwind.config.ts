import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {

    extend: {
      colors: {
        primary: "#745080",
        primarydark: "#DCC6E9",
        primarylight: "#DCC6E3",
        gray: "#595959"
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          md: '3rem',
          lg: '1rem',
          xl: '1rem',
          '2xl': '1rem',
        },
        screens: {
          '2xl': '1120px',
        },

      },
      fontFamily: {
        inter: ['var(--font-inter)', 'Inter', 'sans-serif'],
        greatvibes: ['var(--font-greatvibes)', 'Great Vibes', 'cursive'],
      },
    },
  },
  plugins: [],
}
export default config
