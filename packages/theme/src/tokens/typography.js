import { css } from "styled-components";

// const serif = `'Merriweather', serif;`;
// const sansSerif = `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;`;
// const monospace = `'VT323', monospace;`;

exports.importMonospace = () => {
  return css`
    @import url("https://fonts.googleapis.com/css?family=VT323");
  `;
};

const monospace = `'VT323', monospace;`;

exports.useMonospace = () => {
  return css`
    font-family: ${monospace};
  `;
};
