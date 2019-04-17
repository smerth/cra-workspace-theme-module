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

function from(start) {
  return function() {
    var next = start;
    start += 1;
    return next;
  };
}

function to(gen, end) {
  return function() {
    var value = gen();
    if (value < end) {
      return `h${value} {font-size: ${ms(value, scales.minorSecond)}};`;
    }
    return undefined;
  };
}

function fromTo(start, end) {
  return to(from(start), end);
}

function collect(gen, array) {
  return function() {
    var value = gen();
    if (value !== undefined) {
      array.push(value);
    }
    return value;
  };
}

var array = [];
var col = collect(fromTo(1, 7), array);
var col1 = col(); //returns 0
var col2 = col(); //returns 1
var col3 = col(); //returns undefined
var col4 = col(); //returns undefined
var col5 = col(); //returns undefined
var col6 = col(); //returns undefined
var finishedArray = array; // returns [0, 1]

class developmentBox extends Component {
  render() {
    // var array = [];
    // var col = collect(fromTo(1, 7), array);
    // var col1 = col(); //returns 0
    // var col2 = col(); //returns 1
    // var col3 = col(); //returns undefined
    // var col4 = col(); //returns undefined
    // var col5 = col(); //returns undefined
    // var col6 = col(); //returns undefined
    // var finishedArray = array; // returns [0, 1]
    return (
      <div>
        <div>
          Each Call:
          {col1 +
            " " +
            col2 +
            " " +
            col3 +
            " " +
            col4 +
            " " +
            col5 +
            " " +
            col6 +
            " "}
        </div>
        <div>Finished Array: {finishedArray}</div>
      </div>
    );
  }
}

export default developmentBox;
