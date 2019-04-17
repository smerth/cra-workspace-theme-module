import React, { Component } from "react";
import styled from "styled-components";
// import { space } from "styled-system";
import { SiteGrid } from "theme";
import NavigationBar from "../components/functions/NavigationBar";

import { Helmet } from "react-helmet";
// import { H5 } from "smerththeme/dist/components/typography";
import DevelopmentBox from "../components/functions/DevelopmentBox";

// const bgImage = require("../assets/site-background-image.png");

class Layout extends Component {
  render() {
    return (
      <div>
        <Helmet>
          <title>Layout | Smerth Portfolio</title>
        </Helmet>

        <SiteGrid>
          <NavigationBar />
          <SomePageContent>
            <DevelopmentBox />
          </SomePageContent>
        </SiteGrid>
      </div>
    );
  }
}

export default Layout;

const SomePageContent = styled.div`
  grid-column: 2/3;
  grid-row: 2;
`;

// const BackgroundImage = styled.div`
//   background-image: url(${props => props.image});
//   background-size: cover auto;
//   background-repeat: no-repeat;
//   background-position: center center;
//   position: absolute;
//   top: 0vh;
//   left: 0vw;
//   height: 100%;
//   width: 100%;

//   background-attachment: fixed;
//   z-index: -1;
//   background-color: aqua;
// `;

// const Bg = styled.div`
//   position: fixed;
//   top: -50%;
//   left: -50%;
//   width: 200%;
//   height: 200%;
//   z-index: -1;
// `;

// const Img = styled.img`
//   position: absolute;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   margin: auto;
//   min-width: 50%;
//   min-height: 50%;
// `;
