/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#B794F4",
          DEFAULT: "#805AD5",
          dark: "#553C9A",
        },
        accent: {
          light: "#FED7E2",
          DEFAULT: "#F687B3",
          dark: "#B83280",
        },
        background: {
          light: "#1A1A2E",
          dark: "#0F0F1A",
        },
        surface: {
          light: "#2A2A45",
          dark: "#16162C",
        },
        text: {
          light: "#F7FAFC",
          dark: "#CBD5E0",
        },
      },
      fontFamily: {
        sans: ["Space Grotesk", "sans-serif"],
        heading: ["Clash Display", "sans-serif"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        "slide-up": "slideUp 0.5s ease-out",
        glow: "glow 2s ease-in-out infinite alternate",
        gradient: "gradient 8s linear infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        glow: {
          "0%": {
            boxShadow: "0 0 5px #805AD5, 0 0 10px #805AD5, 0 0 15px #F687B3",
          },
          "100%": {
            boxShadow: "0 0 10px #805AD5, 0 0 20px #805AD5, 0 0 30px #F687B3",
          },
        },
        gradient: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      backgroundSize: {
        "300%": "300%",
      },
    },
  },
  plugins: [],
};
