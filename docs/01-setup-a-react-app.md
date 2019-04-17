# Setup a React App

## Create React App

Create a new React app with `create-react-app`.  Call it "portfolio"

```bash
npx create-react-app portfolio
```

Check that it works

```bash
cd portfolio && npm start
```

You can eject now if you want to manage the app configuration (webpack, etc...)  

```bash
npm eject
```

We will need to eject in order to configure hot component re-loading.  We'll deal with that later.



## Setup reach/router

Add the router module

```bash
yarn add @reach/router
```

Setup first routes for the app

@ App.js

```jsx
import React, { Component } from "react";
import { Router, Link } from "@reach/router";
import Home from "./components/pages/Home";
import About from "./components/pages/About";

class App extends Component {
  render() {
    return (
      <div className="App">
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



## Add page components

@ `components/pages/Home.js`

```jsx
import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div>
        <h2>Welcome</h2>
      </div>
    );
  }
}

```

@ `components/pages/About.js`

```jsx
import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <div>
        <h2>About</h2>
      </div>
    );
  }
}

```

