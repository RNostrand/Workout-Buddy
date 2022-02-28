module.exports = {
  purge: {content: ["./public/**/*.html", "./src/**/*.vue"]},
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "navy": "#202A44",
        "navy-bright": "#4B68B8",
        "light-grey": "#f1f1f1",
      },
    },

    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },

    flex: {
      "1": "1 1 0%",
      "2": "2 2 0%",
    },

    container: {
      center: true,
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },

  variants: {
    extend: {},
  },
  
  plugins: [],
};
