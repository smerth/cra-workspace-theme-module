# Using the ThemeProvider from StyledComponents

Since we are exporting a theme object from our theme, containing all the design tokens we define, it would be great if we could access those variables throughout the app in all components defined by styled-components.

To do that we'll wrap the app in `ThemeProvider` .  

>  NOTE:  <ThemeProvider> returns its children when rendering, so it must only wrap a [single child node](https://github.com/styled-components/styled-components/issues/1325#issuecomment-346564775) as it may be used as the root of the render() method.

so we re-factor App.js like this

@ `App.js`

```jsx
import React, { Component, Fragment } from "react";
import { Router, Link } from "@reach/router";
import { hot } from "react-hot-loader";
import { ThemeProvider } from "styled-components";
import { theme } from "smerth-theme";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

// console.log(theme);

class App extends Component {
  render() {
    const Page = props => (
      <Fragment>
        <nav>
          <Link to="/">Home</Link> <Link to="about">About</Link>
        </nav>
        <Router>
          <Home path="/" />
          <About path="about" />
        </Router>
      </Fragment>
    );

    return (
      <ThemeProvider theme={theme}>
        <Page />
      </ThemeProvider>
    );
  }
}

// export default App;
export default hot(module)(App);

```



Now back @ `components/styled/Home.js` where we are building some styled components that are used on the Home page we have access to the color tokens through the props

```jsx
import styled from "styled-components";

export const Image = styled.img`
  width: 100%;
`;
export const HeroImage = styled.div`
  height: 100vh;
  color: ${props => props.theme.colors.navy};
`;

```





