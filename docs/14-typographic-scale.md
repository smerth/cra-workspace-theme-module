# Typography Scale

I want headers to use a different typographic scale for each screen-size.

## Build a scale generation function

We could build a scale generator for heading elements like this

```jsx
// import React, { Component } from "react";
var ms = require("modularscale-js");

// Set the base between 0-1 (percent) for em
// Set to a pixel value for px
const base = 16;

// Use modularscale-js to generate a value on the scale
const headingFontSize = (index, point, base, ratio) => {
  const value = ms(point, {
    base: [`${base}`],
    ratio: ratio
  });
  const fontSize = `h${index} {font-size: ${value}px};`;
  return fontSize;
};

// Set the point value for each element in the tag array
const tagArray = point => {
  const p = point;
  point++;
  return [
    { index: 1, element: "h1", position: p + 5 },
    { index: 2, element: "h2", position: p + 4 },
    { index: 3, element: "h3", position: p + 3 },
    { index: 4, element: "h3", position: p + 2 },
    { index: 5, element: "h5", position: p + 1 },
    { index: 6, element: "h6", position: p }
  ];
};

// A function to call in styled components to set heading font sizes at given screen-size
function headingFontSizes(ratio, point) {
  const hTags = tagArray(point);
  const generateValues = hTags.map(tag => {
    const value = headingFontSize(tag.index, tag.position, base, ratio);
    return value;
  });
  return generateValues;
}

// Scales - choose one...
// const minorSecond = 1.067;
// const majorThird = 1.25;

export default headingFontSizes;

```



## Create a global stylesheet

We could use these typographic scales in our global styles like this

@ `theme/src/components/GlobalStyles.js`

```jsx
import { createGlobalStyle } from "styled-components";
import scaleGenerator from "../functions/scaleGenerator";

// const serif = `'Merriweather', serif;`;
// const sansSerif = `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;`;
// const monospace = `'VT323', monospace;`;

// Base font-size for the site in percent (0-100)
// const base = 100;

const scales = {
  minorSecond: 1.067,
  majorThird: 1.25,
  perfectFifth: 1.5
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=VT323');
  @import url('https://fonts.googleapis.com/css?family=Merriweather:400,700');

  body {
    font-size: 16px; 
    margin: 0;
    color: ${props => props.theme.colors.primary.main};
    background: ${props => props.theme.colors.white};
    
    @media (min-width: ${props => props.theme.breakpoints.mobileM}) {
      ${scaleGenerator(scales.minorSecond, 1)};
    };
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      ${scaleGenerator(scales.majorThird, -1)};
    };
    @media (min-width: ${props => props.theme.breakpoints.laptop}) {
      ${scaleGenerator(scales.perfectFifth, -1)};
    };
    aside {
      ${scaleGenerator(scales.minorSecond, 1)};
    }
  
  }
`;

export default GlobalStyle;

```



## Set the default font-family from a prop

- Edit `GlobalStyles` to use a switch statement to so the default font-family can be set as a prop on the component.
- Set the font color to primary main from the theme

```jsx
import { createGlobalStyle } from "styled-components";

const denim = props => props.theme.colors.denim;

const serif = `'Merriweather', serif;`;
const sansSerif = `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;`;
const monospace = `'VT323', monospace;`;

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=VT323');
  @import url('https://fonts.googleapis.com/css?family=Merriweather:400,700');

  body {
    color: ${props => (props.blueColor ? denim : "black")};
    font-size: 2rem;
    font-family: ${props => {
      switch (props.fontFamily) {
        case "monospace":
          return monospace;
        case "serif":
          return serif;
        case "sansSerif":
          return sansSerif;
        default:
          return sansSerif;
      }
    }};
  }
`;

export default GlobalStyle;

```

It would be good if we could expand this to be able to set the font-size from a prop since switching between some font-families causes a big change in pixel size of characters on the screen...



## Resources:

- Overview of [fonts](https://www.w3schools.com/css/css_font.asp) in the browser
- https://www.w3schools.com/css/tryit.asp?filename=trycss_font-size_percent_em
- typographic scale - it makes sense to start with a typographical scale visualization tool like [Type-Scale](https://type-scale.com/)
- font-families - there are alot of options.  [Google Fonts](http://www.fonts.google.com) is a good place to start.
- https://developer.mozilla.org/en-US/docs/Web/CSS/font-size
- http://spencermortensen.com/articles/typographic-scale/
- https://type-scale.com/







