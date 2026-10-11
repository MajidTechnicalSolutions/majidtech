/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./src/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      // Loaded and preloaded by next/font in app/layout.jsx.
      modernEra: ["var(--font-modern-era)", "monospace"],
    },
    extend: {
      colors: {
        silverLight: "#D7D7D8",
        silverDark: "#A5A5A6",
        backgroundDark: "#101010",
        majidTech: "#FD5A1E",
        tagDark: "#202025",
        grayMid: "#686869",
        tagDarkOp: "rgb( 4, 4, 5, 80%)",
      },
    },
  },
  plugins: [],
};
