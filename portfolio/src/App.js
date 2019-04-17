import React, { Component } from "react";
import { createHistory, LocationProvider, Router } from "@reach/router";
import createHashSource from "hash-source";
import { hot } from "react-hot-loader";
import { Helmet } from "react-helmet";
import { ThemeProvider } from "styled-components";
import { theme } from "theme";
import GlobalStyle from "./components/styled/GlobalStyle";

// Pages
import Home from "./pages/Home";
import Colors from "./pages/Colors";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Layout from "./pages/Layout";
// import { withTheme } from "styled-components";

let source = createHashSource();
let history = createHistory(source);

class App extends Component {
  render() {
    const Page = () => (
      <LocationProvider history={history}>
        <Helmet>
          <title>Smerth Portfolio</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"
          />
        </Helmet>
        <GlobalStyle fontFamily="monospace" blueColor />

        <Router>
          <Home path="/" />
          <Projects path="projects" />
          <Colors path="colors" />
          <About path="about" />
          <Layout path="layout" />
        </Router>
      </LocationProvider>
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
