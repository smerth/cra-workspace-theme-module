import React from "react";
import { H1, H2, H3, H4, H5, H6, Button } from "smerththeme";
import { theme } from "smerththeme";

console.log(theme);

const App = () => (
  <div>
    <H1>Heading 1</H1>
    <H2>Heading 2</H2>
    <H3>Heading 3</H3>
    <H4>Heading 4</H4>
    <H5>Heading 5</H5>
    <H6>Heading 6</H6>
    <Button type="submit">Hello world</Button>
  </div>
);

export default App;
