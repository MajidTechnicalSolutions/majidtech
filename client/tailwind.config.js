/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      modernEra: "ModernEraMono-Regular",
    },
    extend: {
      colors: {
        silverLight: "#D7D7D8",
        silverDark: "#A5A5A6",
        backgroundDark: "#101010",
        majidTech: "#FD5A1E",
        tagDark: "#0F0F11",
        grayMid: "#686869",
        tagDarkOp: "rgb( 4, 4, 5, 80%)",
      },
    },
  },
  plugins: [],
};
