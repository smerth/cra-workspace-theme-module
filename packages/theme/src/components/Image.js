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

const Asset = styled.img`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  
`;

function Image(props) {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Asset src={props.src} />
      </Wrapper>
    </ThemeProvider>
  );
}

export default Image;
