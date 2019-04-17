import styled from "styled-components";
import media from "./Media.js";

export const Background = styled.div`
  position: fixed;
  top: 0vh;
  
  width: 80vw;
  height: 100vh;
  background-color: red;
  background-image: url(${require("../../assets/portfolio-bkg.png")});
  /* background-color: ${props => props.theme.colors.highlight.main}; */
  /* opacity: 0.2; */
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -99;
  /* Must match the container widths - use a token */
  ${media.tablet`
    width: 90vw;
  `}
  ${media.phone`
    width: 95vw;
  `};
`;
