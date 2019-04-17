var Color = require("color");

var primary = "rgb(16, 105, 201)"; // denim
var secondary = "rgb(237, 125, 48)"; // cadmium orange
var highlight = "rgb(255, 106, 103)"; // pastel red
var gray = "rgb(79, 91, 102)"; // fjord (black is also based on this value)
var white = "rgb(250, 250, 250)"; // alabaster
var success = "rgb(15, 230, 113)"; // spring green
var warning = "rgb(255, 46, 3)"; // ferrari red

var pageBackground = "rgba(250, 250, 250, 0.7)";

module.exports.colors = {
  pageBackground: pageBackground,
  black: Color(gray)
    .darken(0.8)
    .hex(),
  white: Color(white).hex(),
  gray: [
    Color(gray).hex(),
    Color(gray)
      .lighten(0.9)
      .hex(),
    Color(gray)
      .darken(0.5)
      .hex()
  ],
  primary: {
    main: Color(primary).hex(),
    light: Color(primary)
      .lighten(0.9)
      .hex(),
    dark: Color(primary)
      .darken(0.5)
      .hex()
  },
  secondary: {
    main: Color(secondary).hex(),
    light: Color(secondary)
      .lighten(0.2)
      .hex(),
    dark: Color(secondary)
      .darken(0.3)
      .hex()
  },
  highlight: {
    main: Color(highlight).hex(),
    light: Color(highlight)
      .lighten(0.2)
      .hex(),
    dark: Color(highlight)
      .darken(0.3)
      .hex()
  },
  alert: {
    success: Color(success).hex(),
    warning: Color(warning).hex()
  }
};
