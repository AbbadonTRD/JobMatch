/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'pastel-pink': '#F5E1DF',
        'cow-purple': '#8B5CF6',
        'cow-blue': '#06B6D4',
        'cow-green': '#10B981',
        'cow-orange': '#F97316',
        'cow-dark': '#1F2937'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
