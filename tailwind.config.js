/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
    theme: {
      extend: {
        boxShadow: {
          'UI': '0px 8px 0px rgba(25, 25, 25, 0.8)',
          'input': '0px 4px 0px rgba(232, 232, 232, 0.8)',
          'add-btn': '0px 4px 0px rgba(211, 0, 0, 0.8)',
        }
      }
    },
    variants: {},
    plugins: [],
  }

