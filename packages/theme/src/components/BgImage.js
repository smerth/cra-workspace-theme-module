import React from "react";
import { space, width, fontSize, color } from "styled-system";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "../index";

const Wrapper = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}

`;

const Asset = styled.div`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  background-image: url(${props => props.image});

opacity: 0.2;
background-size: 80%;
background-repeat: no-repeat;
background-position: center;
${space};
position: fixed;
top: 0vh;
left: 0vw;
height: ${props => props.height};
width: ${props => props.height};

z-index: ${props => props.z};
/* These three lines are for transparency in all browsers. */
-ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=50)";
      filter: alpha(opacity=50);
      opacity: .5;
  
`;

function BgImage(props) {
  return (
    <ThemeProvider theme={theme}>
      <Asset {...props} />
    </ThemeProvider>
  );
}

export default BgImage;
