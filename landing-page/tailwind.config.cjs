/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // you can change font if needed
      },
      colors: {
        brand: {
          DEFAULT: "#4F46E5", // Indigo-600 as primary
          dark: "#4338CA",    // Indigo-700
          light: "#6366F1",   // Indigo-500
        },
      },
    },
  },
  plugins: [],
}
