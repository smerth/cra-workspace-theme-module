import React, { Component, Fragment } from "react";

import { H1, H2, H3, H4, H5, H6 } from "theme";

class TestElements extends Component {
  render() {
    // var output = generateValues;
    // var output = headingFontSizes(majorThird, 1);
    return (
      <Fragment>
        <H1>H1 Heading</H1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quo
          porro.
        </p>
        <H2>H2 Heading</H2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quo
          porro.
        </p>
        <H3>H3 Heading</H3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quo
          porro.
        </p>
        <H4>H4 Heading</H4>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quo
          porro.
        </p>
        <H5>H5 Heading</H5>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quo
          porro.
        </p>
        <H6>H6 Heading</H6>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit quo
          porro.
        </p>
      </Fragment>
    );
  }
}

export default TestElements;
