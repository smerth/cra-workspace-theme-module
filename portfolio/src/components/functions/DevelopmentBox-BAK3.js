import React, { Component } from "react";
var ms = require("modularscale-js");

// const start = 0;
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
const majorThird = 1.25;

class developmentBox extends Component {
  render() {
    // var output = generateValues;
    var output = headingFontSizes(majorThird, 1);
    return (
      <div>
        <div>
          Output:
          {output}
        </div>
      </div>
    );
  }
}

export default developmentBox;
