#  Some experiments with styled-components

These are some experiments with styled components.  Just to see what kinds of things you can do...

First read about how styled-components works:

https://www.styled-components.com/docs/advanced/#tagged-template-literals

https://mxstbr.blog/2016/11/styled-components-magic-explained/



## Background Image

Place a background image in the assets folder

Create a styled component for a background image

```jsx
import styled from "styled-components";
// import { yellow } from 'theme/variables';

export const Background = styled.div`
  position: fixed;
  left: 10vw;
  width: 80vw;
  top: 10vh;
  height: 80vh;
  background-image: url(${require("../../assets/portfolio-bkg.png")});
  background-color: ${props => props.theme.colors.cadmium};
  opacity: 0.2;
  background-size: 80%;
  background-repeat: no-repeat;
  background-position: center;
  z-index: -99;
`;
```

Add the background image to the project page

```jsx
import React, { Component } from "react";
import Zoomy from "react-zoomy";
import { ImageButton } from "../styled/Projects";
import Container from "../styled/Container";
import { Background } from "../styled/Background";

class Projects extends Component {
  render() {
    return (
      <Container>
        <Background />
        <SomeOtherContent />
      </Container>
    );
  }
}

export default Projects;

```

## Center the background image

create a flex component in container

```jsx
export const Flex = styled.div`
  display: flex;
  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `}
  ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify};
    `}
  ${({ align }) =>
    align &&
    css`
      align-content: ${align};
    `}
`;
```

wrap background image in it and set justify prop to center.



## Make HTML element components


Lets make some components to use with HTML tags

@ components/styled/tags.js

```jsx
import styled from "styled-components";

export const A = styled.a`
  color: ${props => props.theme.colors.denim};
  text-decoration: none;
  position: relative;

  &:after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 10%;
    width: 100%;
    background-color: ${props => props.theme.colors.denim};
    z-index: -1;
    transition: height 0.1s, background-color 0.1s;
  }

  &:hover:after {
    height: 40%;
    background-color: ${props => props.theme.colors.cadmium};
  }
`;

export const [H1, H2, H3, H4, H5, H6, P, Blockquote, Code] = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "blockquote",
  "code"
].map(
  tag => styled[tag]`
    ${({ align }) => align && `text-align: ${align};`}
  `
);
```



## Add an index number to a list item

Use this to add an index number to a list item

```jsx
export const Index = styled.div`
  position: absolute;
  bottom: 0;
  z-index: -1;
  font-size: 3em;
  h1 {
    margin: 0;
    font-weight: bold;
    color: ${props => props.theme.colors.cadmium};
    opacity: 0.5;
    transform: translateY(20%);
  }
`;
```



import index into projects and add before a project listing

```jsx
<Index>
    <h1>01</h1>
</Index>
```



Add a Relative component to the styled Container

```jsx
export const Container = styled.div`
  padding-left: 120px;
  padding-right: 120px;
  padding-top: 30px;
`;

export const Relative = styled.div`
  position: relative;
`;
```



Import the Relative component and wrap Index and H1 title in it

```jsx
<Relative>
  <Index>
    <h1>01</h1>
  </Index>
  <H1 align="center">
    npm install --save <A href="www.google.com">react-zoomy</A>{" "}
  </H1>
</Relative>
```




## Component inheritance

Lastly let's make one final edit to Container

Let add a Div component that takes in "margin" as a prop.  

Then we can use that Div where ever we want a  `styled.div` so that we can inherit the functionality of Div like this:

```jsx
import styled, { css } from "styled-components";
// import media from 'theme/media';

export const Div = styled.div`
  ${({ marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: ${marginBottom};
    `}
  ${({ marginLeft }) =>
    marginLeft &&
    css`
      margin-left: ${marginLeft};
    `}
  ${({ marginRight }) =>
    marginRight &&
    css`
      margin-right: ${marginRight};
    `}
  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${marginTop};
    `}
`;

export const Container = styled(Div)`
  padding-left: 120px;
  padding-right: 120px;
  padding-top: 30px;
`;

export const Relative = styled(Div)`
  position: relative;
`;

export const Flex = styled(Div)`
  display: flex;
  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `}
  ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify};
    `}
  ${({ align }) =>
    align &&
    css`
      align-content: ${align};
    `}
`;

```

Now we add margins to any of these components that are based on the Div component.

```jsx
<Relative marginBottom="100px">
```

