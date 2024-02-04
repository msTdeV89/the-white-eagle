/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "80%": { transform: "scaleY(1.1)" },
          "100%": { transform: "scaleY(1)" },
        },
        "close-menu": {
          "0%": { transform: "scaleY(1)" },
          "80%": { transform: "scaleY(1.1)" },
          "100%": { transform: "scaleY(0)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.5s ease-in-out forwards",
        "close-menu": "close-menu 0.5s ease-in-out forwards",
      },
    },
    colors: {
      main: "#fb0038",
      secondary: "#c9002d",
      grey: "#808080",
      white: "#ffffff",
      black: "#000000",
      facebook: "#0865fe",
    },
  },
  plugins: [],
};
