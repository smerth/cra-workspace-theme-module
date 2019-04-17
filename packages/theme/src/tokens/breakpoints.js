import { css } from "styled-components";

// Media call tokens and the breakpoints array are built from these namded variables

const sizes = {
  mobileS: 320,
  mobileM: 375,
  mobileL: 425,
  tablet: 768,
  laptop: 1024,
  laptopL: 1440,
  desktop: 2560
};

// We will use styled components to build media call strings
// Create an object containing min-width media calls based on the named sizes
exports.media = Object.keys(sizes).reduce((finalMedia, size) => {
  return {
    ...finalMedia,
    [size]: function(...args) {
      return css`
        @media (min-width: ${sizes[size]}px) {
          ${css(...args)}
        }
      `;
    }
  };
}, {});

exports.breakpoints = Object.keys(sizes).reduce((finalBreakpoints, size) => {
  return {
    ...finalBreakpoints,
    [size]: `${sizes[size]}px`
  };
}, {});
