import { createGlobalStyle } from "styled-components";
import scaleGenerator from "../functions/scaleGenerator";

// const serif = `'Merriweather', serif;`;
// const sansSerif = `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;`;
// const monospace = `'VT323', monospace;`;

// Base font-size for the site in percent (0-100)
// const base = 100;

const scales = {
  minorSecond: 1.067,
  majorThird: 1.25,
  perfectFifth: 1.5
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=VT323');
  @import url('https://fonts.googleapis.com/css?family=Merriweather:400,700');


  body {
    font-size: 16px; 
    margin: 0;
    color: ${props => props.theme.colors.primary.main};
    background: ${props => props.theme.colors.white};
    
    @media (min-width: ${props => props.theme.breakpoints.mobileM}) {
      ${scaleGenerator(scales.minorSecond, 1)};
    };
    @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      ${scaleGenerator(scales.majorThird, -1)};
    };
    @media (min-width: ${props => props.theme.breakpoints.laptop}) {
      ${scaleGenerator(scales.perfectFifth, -1)};
    };
    aside {
      ${scaleGenerator(scales.minorSecond, 1)};
    }
  
  }
`;

export default GlobalStyle;
