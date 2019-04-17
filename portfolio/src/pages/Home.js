import React, { Component } from "react";
import { Container } from "../components/styled/Container";
import { Background } from "../components/styled/Background";
import { HeroImage } from "../components/styled/HeroImage";
import { RevealP } from "../components/styled/RevealP";
import WhenInView from "../components/classes/WhenInView";
import NavigationBar from "../components/functions/NavigationBar";
import { theme, SiteTitle } from "theme";

export default class Home extends Component {
  render() {
    console.log(theme);
    return (
      <Container>
        <Background />
        <NavigationBar />
        <HeroImage>
          <SiteTitle
            color={theme.colors.primary.main}
            fontSize={[60, 80, 100, 120]}
            m={[1, 2, 3, 6]}
          >
            Stephen Merth
          </SiteTitle>
          <h2>Front-end Developer</h2>
        </HeroImage>
        <WhenInView>
          {({ isInView }) => (
            <RevealP hide={!isInView} origin="left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
              velit dolor. In et dolor non sapien ultricies hendrerit. Maecenas
              ultricies porttitor est, sit amet eleifend sem egestas ut. Cras
              eget imperdiet est. Cras viverra ligula urna, eget rutrum erat
              lacinia nec. Praesent nec libero accumsan turpis molestie dapibus.
              Mauris scelerisque ligula sed felis ultricies, ut efficitur orci
              dignissim. Nam eleifend ligula sit amet congue dapibus. Vestibulum
              ut nisi vel quam luctus mollis vel ac mi. Vivamus pellentesque
              finibus sapien quis convallis. Donec at interdum mi. Sed finibus
              sed justo ac malesuada. Aliquam pulvinar pellentesque lacinia.
              Integer commodo blandit quam, ut blandit quam pretium eget.
            </RevealP>
          )}
        </WhenInView>
        <WhenInView>
          {({ isInView }) => (
            <RevealP hide={!isInView} origin="right">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
              velit dolor. In et dolor non sapien ultricies hendrerit. Maecenas
              ultricies porttitor est, sit amet eleifend sem egestas ut. Cras
              eget imperdiet est. Cras viverra ligula urna, eget rutrum erat
              lacinia nec. Praesent nec libero accumsan turpis molestie dapibus.
              Mauris scelerisque ligula sed felis ultricies, ut efficitur orci
              dignissim. Nam eleifend ligula sit amet congue dapibus. Vestibulum
              ut nisi vel quam luctus mollis vel ac mi. Vivamus pellentesque
              finibus sapien quis convallis. Donec at interdum mi. Sed finibus
              sed justo ac malesuada. Aliquam pulvinar pellentesque lacinia.
              Integer commodo blandit quam, ut blandit quam pretium eget.
            </RevealP>
          )}
        </WhenInView>
        <WhenInView>
          {({ isInView }) => (
            <RevealP hide={!isInView} origin="left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce in
              velit dolor. In et dolor non sapien ultricies hendrerit. Maecenas
              ultricies porttitor est, sit amet eleifend sem egestas ut. Cras
              eget imperdiet est. Cras viverra ligula urna, eget rutrum erat
              lacinia nec. Praesent nec libero accumsan turpis molestie dapibus.
              Mauris scelerisque ligula sed felis ultricies, ut efficitur orci
              dignissim. Nam eleifend ligula sit amet congue dapibus. Vestibulum
              ut nisi vel quam luctus mollis vel ac mi. Vivamus pellentesque
              finibus sapien quis convallis. Donec at interdum mi. Sed finibus
              sed justo ac malesuada. Aliquam pulvinar pellentesque lacinia.
              Integer commodo blandit quam, ut blandit quam pretium eget.
            </RevealP>
          )}
        </WhenInView>
      </Container>
    );
  }
}
