# Add createGlobalStyle

## Add global styles

https://www.styled-components.com/docs/api#createglobalstyle

createGlobalStyle is a helper function to generate a special StyledComponent that handles global styles. 

Normally, styled components are automatically scoped to a local CSS class and therefore isolated from other components. 

In the case of createGlobalStyle, this limitation is removed and things like **CSS resets** or **base stylesheets** can be applied to the entire app using this component.



| ARGUMENTS                | DESCRIPTION                                                 |
| ------------------------ | ----------------------------------------------------------- |
| 1. TaggedTemplateLiteral | A tagged template literal with your CSS and interpolations. |

Returns a StyledComponent that does not accept children. Place it at the top of your React tree and the global styles will be injected when the component is "rendered".



@ `components/styled/GlobalStyle.js`

```jsx
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=VT323');

  nav a {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  }

  body {
    color: ${props => (props.whiteColor ? "white" : "black")};
    font-family: ${props =>
      props.computerFont
        ? `'VT323', monospace;`
        : `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;`};
  }
`;

export default GlobalStyle;

```

Note the power of styled-components lies in being able to write functions to generate css statements.  In the above component the color and the font-family are set using a ternary operator based on the value received by the component through props.

Inject gobal Styles into the app at a higher level

@`App.js`

```jsx
import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import GlobalStyle from "./components/styled/GlobalStyle";

class App extends Component {
  render() {
    return (
      <div className="App">
        <GlobalStyle computerFont />
        <nav>
          <Link to="/">Home</Link> <Link to="about">About</Link>
        </nav>
        <Router>
          <Home path="/" />
          <About path="about" />
        </Router>
      </div>
    );
  }
}

export default App;
```



## Add a container component

@ `components/styled/Container.js`

```jsx
import styled from "styled-components";

const Container = styled.div`
  width: 960px;
  margin: 30px auto;
`;

export default Container;

```



Add to home 

@ `components/pages/Home.js`

```jsx
import React, { Component } from "react";
import styled from "styled-components";
import Container from "../styled/Container";

const Image = styled.img`
  width: 100%;
`;

export default class Home extends Component {
  render() {
    return (
      <Container>
        <Image
          src={require("../../assets/hero.gif")}
          alt="water lapping against a mediterainean shore"
        />
        <p>
          Blah, Blah, Blah...
        </p>
      </Container>
    );
  }
}

```

