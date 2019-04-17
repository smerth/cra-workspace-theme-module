import React, { Component } from "react";
import { Index } from "../components/styled/IndexNumber";
import { ImageContainer } from "../components/styled/ImageContainer";
import { Container } from "../components/styled/Container";
import { Relative } from "../components/styled/Relative";
import { Title } from "../components/styled/Title";
import { Background } from "../components/styled/Background";
import { A, H1 } from "../components/styled/HtmlTags";
import ParallaxImage from "react-image-parallax2";
import { Helmet } from "react-helmet";

class Projects extends Component {
  render() {
    return (
      <Container>
        <Helmet>
          <title>Projects | Smerth Portfolio</title>
        </Helmet>
        <Background />
        <Title>Open-Source Projects</Title>
        <Relative marginBottom="100px">
          <Index>
            <h1>01</h1>
          </Index>
          <H1 align="center">
            npm install --save <A href="www.google.com">react-zoomy</A>{" "}
          </H1>
        </Relative>

        <Relative marginBottom="100px">
          <Index>
            <h1>02</h1>
          </Index>
          <H1 align="center">
            npm install --save{" "}
            <A href="www.google.com">react-image-parallax2</A>{" "}
          </H1>
        </Relative>
        <ImageContainer>
          <ParallaxImage
            reduceHeight={0.55}
            src={require("../assets/parallax.jpg")}
          />
        </ImageContainer>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </Container>
    );
  }
}

export default Projects;
