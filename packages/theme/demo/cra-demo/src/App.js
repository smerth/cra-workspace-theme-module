import React, { Component } from "react";
import "./App.css";
import { H1, Button } from "theme";

class App extends Component {
  render() {
    return (
      <body className="container">
        <header>Header</header>
        <nav>Navigation</nav>
        <main>
          <h1>Here are some components exported from this theme</h1>
          <H1>This is an h1 component from smerththeme</H1>
          <Button>smerththeme button </Button>
          <p>
            Vestibulum consectetur sit amet nisi ut consectetur. Praesent
            efficitur, nibh vitae fringilla scelerisque, est neque faucibus
            quam, in iaculis purus libero eget mauris. Curabitur et luctus
            sapien, ac gravida orci. Aliquam erat volutpat. In hac habitasse
            platea dictumst. Aenean commodo, arcu a commodo efficitur, libero
            dolor mollis turpis, non posuere orci leo eget enim. Curabitur sit
            amet elementum orci, pulvinar dignissim urna. Morbi id ex eu ex
            congue laoreet. Aenean tincidunt dolor justo, semper pretium libero
            luctus nec. Ut vulputate metus accumsan leo imperdiet tincidunt.
            Phasellus nec rutrum dolor. Cras imperdiet sollicitudin arcu, id
            interdum nibh fermentum in.
          </p>
        </main>
        <aside>Related links</aside>
        <footer>Footer</footer>
      </body>
    );
  }
}

export default App;
