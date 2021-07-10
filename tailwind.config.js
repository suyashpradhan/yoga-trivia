module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#92E3A9",
          light: "#E9F9EE",
          dark: "#378065",
          background_light: "#e8f0f2",
          primaryText: "#4b4c4d",
          secondaryText: "#5c5d5d",
          background: "#f5f5f7",
          border: "#E8E7E9",
          danger: "#ff0000",
        },
      },
      fontFamily: {
        headline: "Inter, sans-serif",
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
