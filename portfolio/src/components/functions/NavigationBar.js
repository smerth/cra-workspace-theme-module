import React from "react";
import { Link } from "@reach/router";
import styled from "styled-components";
// import media from "../styled/Media.js";

const NavigationContainer = styled.nav`
  /* Place on the grid */
  grid-column: 2/3;
  grid-row: 1/2;
  /* Mobile */
  display: flex;
  flex-direction: column;
  /* align menu items */
  /* padding: 0.5em 0;
  display: flex;
  justify-content: space-evenly; */
  /* keep above background */
  background: ${props => props.theme.colors.white};
  z-index: 100;
  ${props => props.theme.media.mobileM`
  flex-direction: row;
    
    justify-content: space-evenly;
    flex-wrap: wrap;

    `};
  ${props => props.theme.media.desktop`
  flex-direction: row;
    
    justify-content: space-evenly;
    flex-wrap: wrap;

    `};
`;

const NavItem = styled(Link)`
  font-size: ${props => props.theme.fontSizes[4]};
  /* height: 1em; */
  cursor: pointer;
  color: ${props => props.theme.colors.highlight.dark};
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.secondary.dark};
    transform: scale(1.3, 1.5);
  }
  ${props => props.theme.media.tablet`
  font-size: 1.3em;

  `}
  ${props => props.theme.media.mobileM`
  font-size: 1.1em;
  &:hover {
    margin-left: 1.2em;
    margin-right: 1.2em;
  }

  `}
`;

function NavigationBar(props) {
  return (
    <NavigationContainer>
      <NavItem to="/">Home</NavItem>
      <NavItem to="projects">Projects</NavItem>
      <NavItem to="colors">Colors</NavItem>
      <NavItem to="about">About</NavItem>
      <NavItem to="layout">Layout</NavItem>
    </NavigationContainer>
  );
}

export default NavigationBar;
