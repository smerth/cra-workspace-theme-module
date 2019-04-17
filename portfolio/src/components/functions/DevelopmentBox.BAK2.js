import React, { Component } from "react";
var ms = require("modularscale-js");

// var base = 16;

const scales = {
  minorSecond: {
    base: [16],
    ratio: 1.067
  },
  majorThird: {
    base: [16],
    ratio: 1.25
  }
};

const start = 0;
const base = 16;

var hTags = [
  { index: 1, element: "h1", position: `6` },
  { index: 2, element: "h2", position: `5` },
  { index: 3, element: "h3", position: `4` },
  { index: 4, element: "h3", position: `3` },
  { index: 5, element: "h5", position: `2` },
  { index: 6, element: "h6", position: `1` }
];

const headingFontSize = (index, point, base, ratio) => {
  const value = ms(point, {
    base: [`${base}`],
    ratio: ratio
  });
  const fontSize = `h${index} {font-size: ${value}px};`;
  return fontSize;
};

// This example has a fixed ratio
//
const generateValues = hTags.map(tag => {
  const value = headingFontSize(tag.index, tag.position, base, 1.25);
  return value;
});

// function from(start) {
//   return function() {
//     var next = start;
//     start += 1;
//     return next;
//   };
// }

// function to(gen, end) {
//   return function() {
//     var value = gen();
//     if (value < end) {
//       return `h${value} {font-size: ${ms(value, scales.minorSecond)}};`;
//     }
//     return undefined;
//   };
// }

// function fromTo(start, end) {
//   return to(from(start), end);
// }

// function collect(gen, array) {
//   return function() {
//     var value = gen();
//     if (value !== undefined) {
//       array.push(value);
//     }
//     return value;
//   };
// }

// var array = [];
// var col = collect(fromTo(1, 7), array);
// var col1 = col(); //returns 0
// var col2 = col(); //returns 1
// var col3 = col(); //returns undefined
// var col4 = col(); //returns undefined
// var col5 = col(); //returns undefined
// var col6 = col(); //returns undefined
// var finishedArray = array; // returns [0, 1]

class developmentBox extends Component {
  render() {
    var output = generateValues;
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
