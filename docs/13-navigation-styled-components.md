# Navigation & Styled-components

This is just a quick idea for using a pseudo element `content: ""` to add a funky highlight effect  when hovering over a link.

Make some styled components for use in navigation

```jsx
import styled from "styled-components";
import { Flex } from "./Container";
import { Link } from "@reach/router";

export const NavigationContainer = styled(Flex)`
  position: fixed;
  right: 0;
  right: 2em;
  top: 1.8em;
`;

export const NavItem = styled(Link)`
  margin-right: 30px;
  font-size: 1.5em;
  cursor: pointer;
  color: blue;
  position: relative;
  text-decoration: none;
  &:hover {
    color: yellow;
    &:after {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: red;
      z-index: -1;
      transform: scale(1.3, 1.5);
    }
  }
`;

```

Use them in a NavigationBar component

```jsx
import React, { Component } from "react";
import { NavigationContainer, NavItem } from "../styled/NavigationBar";

class NavigationBar extends Component {
  render() {
    return (
      <NavigationContainer>
        <NavItem to="/">Home</NavItem>
        <NavItem to="projects">Projects</NavItem>
        <NavItem to="colors">Colors</NavItem>
        <NavItem to="/">About Me</NavItem>
      </NavigationContainer>
    );
  }
}

export default NavigationBar;

```

