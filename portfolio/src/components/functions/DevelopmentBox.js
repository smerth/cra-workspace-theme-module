import React, { Component } from "react";
import styled from "styled-components";
import TestElements from "./TestElements";
// var ms = require("modularscale-js");

// New apporach
// At each screensize all manner of measurements change.
// Maybe they should all change with the scale
// - Use modularscale-js to generate an array of values
// - pass in the base as the first point
// Call this function within other functions
// - function to set the heading, p, blockquote, code, font sizes
// (this can be called with separate values for header, main, aside, all within body in the GlobalStyles in a media call...)
// - function to set the margins and padding on headings, p, ul, ol, li, a

// function scaleGenerator(point, options) {
//   return ms(point, options);
// }

// Scales - choose one...
// const minorSecond = 1.067;
// const majorThird = 1.25;

class developmentBox extends Component {
  render() {
    // var output = generateValues;
    // var output = headingFontSizes(majorThird, 1);
    return (
      <div className="devBox">
        <Header>
          Header
          <TestElements />
        </Header>
        <Main>
          <Article>
            Article
            <TestElements />
          </Article>
          <Aside>
            Aside
            <TestElements />
          </Aside>
        </Main>
        <Footer>
          Footer
          <TestElements />
        </Footer>
      </div>
    );
  }
}

export default developmentBox;

const Header = styled.header`
  width: 100%;
  background: rgb(251, 109, 140);
`;
const Main = styled.div`
  display: flex;
`;
const Article = styled.article`
  width: 66.666%;
  background: rgb(203, 214, 146);
`;
const Aside = styled.aside`
  width: 33.333%;
  background: rgb(177, 174, 145);
`;
const Footer = styled.footer`
  width: 100%;
  background: rgb(255, 106, 103);
`;
