import React, { Component } from "react";
import { Container } from "../components/styled/Container";
import { Flex } from "../components/styled/Flex";
import { Title } from "../components/styled/Title";
import ReactPlayer from "react-player";
import { H2, P } from "../components/styled/HtmlTags";
import { Helmet } from "react-helmet";

class About extends Component {
  render() {
    return (
      <Container>
        <Helmet>
          <title>About | Smerth Portfolio</title>
        </Helmet>
        <Title>About</Title>
        <H2 align="right">Whaa? Do you play sport? Hell yeah I do.</H2>
        <Flex>
          <div>
            <P align="right">
              Check out this crazy basketball montage that didn't take me nearly
              one hour to make it.
            </P>
          </div>
          <ReactPlayer
            width="100%"
            controls
            url={require("../assets/test.mp4")}
          />
        </Flex>
      </Container>
    );
  }
}

export default About;
