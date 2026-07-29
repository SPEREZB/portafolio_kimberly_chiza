/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#2d5a87',
          DEFAULT: '#1e3a5f',
          dark: '#0f2840',
        },
        accent: {
          light: '#f5af19',
          DEFAULT: '#f12711',
          dark: '#d41e0a',
        },
      },
      fontFamily: {
        sans: ['Segoe UI', 'Tahoma', 'Geneva', 'Verdana', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
