/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        zinc: {
          100: "#040404",
          200: "#0B0B0B",
          300: "#181818",
        },
        slate: {
          100: "#4D4D4D",
        },
      },
      backgroundImage: {
        backgroundSobreMim: "url('/src/assets/backgroundSobreMim.png')",
      },
    },
  },
  plugins: [],
};
