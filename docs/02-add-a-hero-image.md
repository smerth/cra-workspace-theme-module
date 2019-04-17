## Add a Hero Image

@ `src/assets` add home page hero image

add the  image to the home page 

@ `components/pages/Home.js`

```jsx
import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <img
          src={require("../../assets/hero.gif")}
          alt="water lapping against a mediterainean shore"
        />   
      </div>
    );
  }
}

```



Install `styled-components`

```bash
yarn add styled-components
```



Use styled components to create the Image component

@ `components/pages/Home.js`

```jsx
import React, { Component } from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
`;

export default class Home extends Component {
  render() {
    return (
      <div>
        <Image
          src={require("../../assets/hero.gif")}
          alt="water lapping against a mediterainean shore"
        />     
      </div>
    );
  }
}

```

Add some description text to the page

```jsx
<p>Amet veniam sint excepteur est consequat nulla nisi aliqua do cillum culpa exercitation irure quis. Lorem sunt magna ullamco ullamco. Anim voluptate commodo veniam incididunt culpa veniam duis ad excepteur sint id. Duis eu consequat magna Lorem magna dolore ullamco excepteur incididunt. Anim ut culpa eiusmod nulla. Incididunt reprehenderit qui irure voluptate laboris duis est ex eiusmod velit occaecat ad officia. Amet labore Lorem fugiat reprehenderit laborum ut ullamco adipisicing enim incididunt. Elit magna adipisicing esse officia ullamco elit dolor nulla officia adipisicing eu. Fugiat consequat magna sint do esse ut amet amet. Cillum enim nisi occaecat enim.</p>
```



