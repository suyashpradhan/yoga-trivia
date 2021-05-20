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
        },
      },
      fontFamily: {
        headline: "Poppins, sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
