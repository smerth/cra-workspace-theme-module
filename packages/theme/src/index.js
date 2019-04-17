// test components
export { H1, H2, H3, H4, H5, H6 } from "./components/typography";
export { default as Button } from "./components/button";

// ui-kit components
export { default as SiteGrid } from "./components/SiteGrid";
export { default as Image } from "./components/Image";
export { default as BgImage } from "./components/BgImage";
export { default as SiteTitle } from "./components/SiteTitle";

// theme parts
import { fontSizes } from "./tokens/fontSizes.js";
import { colors } from "./tokens/colors.js";
import { breakpoints } from "./tokens/breakpoints.js";
import { media } from "./tokens/breakpoints.js";
import { space } from "./tokens/space.js";
import { importMonospace } from "./tokens/typography.js";
import { useMonospace } from "./tokens/typography.js";
// import { typography } from "./tokens/typography.js";

// theme object
module.exports.theme = {
  fontSizes: fontSizes,
  colors: colors,
  breakpoints: breakpoints,
  media: media,
  space: space,
  importMonospace: importMonospace,
  useMonospace: useMonospace
};
