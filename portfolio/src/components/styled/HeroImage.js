import styled from "styled-components";
import { theme } from "theme";

export const HeroImage = styled.div`
  height: 100vh;
  
  background-image: url('${require("../../assets/hero.gif")}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  display: flex;
  flex-direction: column;
  /* horizontally align */
  text-align: center;
  /* vertically align */
  justify-content: flex-start;

  font-size: 4rem;


  ${theme.media.mobileM`
    width: 95vw;
  `};
  ${theme.media.tablet`
    
    top: 30%;
  left: 0;
  width: 100%;
  height: auto;
  `}





`;
