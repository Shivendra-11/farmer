/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#24231D',
        'custom-back': '#1F1E17',
        'custom-green': '#F8F7F0',
      },
    },
  },
  plugins: [],
}

