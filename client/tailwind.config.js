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
      // Ask Majid's "thinking" dots: each rises and brightens in turn; with
      // reduced motion they only fade.
      keyframes: {
        typing: {
          "0%, 60%, 100%": { transform: "translateY(0)", opacity: "0.35" },
          "30%": { transform: "translateY(-5px)", opacity: "1" },
        },
        "typing-fade": {
          "0%, 60%, 100%": { opacity: "0.35" },
          "30%": { opacity: "1" },
        },
      },
      animation: {
        typing: "typing 1.2s ease-in-out infinite both",
        "typing-fade": "typing-fade 1.2s ease-in-out infinite both",
      },
    },
  },
  plugins: [],
};
