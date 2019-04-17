import React, { Component } from "react";
import { Container } from "../components/styled/Container";
import { Title } from "../components/styled/Title";
import Box from "../components/styled-system/Box";
import { Helmet } from "react-helmet";

export default class About extends Component {
  render() {
    return (
      <Container>
        <Helmet>
          <title>Colors | Smerth Portfolio</title>
        </Helmet>
        <Title>Colors</Title>
        These colors are available through the theme object.
        <h2>Primary Colors</h2>
        <div>
          <Box
            // p={6}
            height={100}
            color="white"
            bg="primary.main"
          >
            primary.main
          </Box>
          <Box height={100} color="white" bg="primary.light">
            primary.light
          </Box>
          <Box height={100} color="white" bg="primary.dark">
            primary.dark
          </Box>
        </div>
        <h2>Secondary Colors</h2>
        <div>
          <Box height={100} color="white" bg="secondary.main">
            secondary.main
          </Box>
          <Box height={100} color="white" bg="secondary.light">
            secondary.light
          </Box>
          <Box height={100} color="white" bg="secondary.dark">
            secondary.dark
          </Box>
        </div>
        <h2>Highlight Colors</h2>
        <div>
          <Box height={100} color="white" bg="highlight.main">
            secondary.main
          </Box>
          <Box height={100} color="white" bg="highlight.light">
            secondary.light
          </Box>
          <Box height={100} color="white" bg="highlight.dark">
            secondary.dark
          </Box>
        </div>
        <h2>Alert Colors</h2>
        <div>
          <Box height={100} color="white" bg="alert.success">
            alert.success
          </Box>
          <Box height={100} color="white" bg="alert.warning">
            alert.warning
          </Box>
        </div>
        <h2>Gray Colors</h2>
        <div>grays</div>
      </Container>
    );
  }
}
