module.exports = {
  important: true,
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // add color here by using - propertyName: "HEX,RGB,HSL", don't forget the quotes! ( Example -> color1: "#000000", next color..)
        color1: "#ebcbb3",
      },
      fontFamily: {
        prompt: ["Prompt"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
