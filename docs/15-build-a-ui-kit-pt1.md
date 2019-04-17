# Build a UI kit with styled-components - Part 1

## Setup

[Part 1 - Build a UI kit with styled-components](https://www.youtube.com/watch?v=u6gQ48rSw-E)

Create a new empty `theme` folder.

Open in code editor.

Initialize

```bash
yarn init -y
```

Add dependancies

@ `package.json`

```json
  "devDependencies": {
    "babel-cli": "^6.24.1",
    "babel-core": "^6.25.0",
    "babel-loader": "^7.1.1",
    "babel-preset-es2015": "^6.24.1",
    "babel-preset-react": "^6.24.1",
    "babel-preset-stage-2": "^6.24.1",
    "html-webpack-plugin": "^2.29.0",
    "raw-loader": "^0.5.1",
    "webpack": "^3.2.0",
    "webpack-dev-server": "^2.5.1"
  },
  "dependencies": {
    "react": "^15.6.1",
    "react-dom": "^15.6.1",
    "styled-components": "^2.1.1"
}
```

Set the name to `theme`

We need babel to process our work into a build folder that will contain the actual code for NPM.

```bash
yarn workspace theme install
```

 Add scripts

@ `package.json`

```json
  "scripts": {
    "start": "webpack-dev-server",
    "docs": "NODE_ENV=production webpack -p",
    "build": "babel src -d dist",
    "clean": "rm -rf dist",
    "dist": "yarn run clean && yarn run build"
},
```

Add an array for files

@ `package.json`

```json
"files": ["dist"],
```

Add a README

```bash
touch README.md
```

Edit the readme

```markdown
# Theme

A theme for a `create-react-app` project built with `styled-components` & `styled-system`
```



Add a `webpack.config.js` file

```javascript
const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: './docs/entry.js',
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  resolve: {
    alias: {
      theme: path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ],
  devServer: {
    contentBase: 'docs/'
  }
}
```

Add `.babelrc`

```text
{
  "presets": ["es2015", "stage-2", "react"]
}
```



Add `.gitignore`

```text
/dist
/node_modules
```



Create @ `docs/entry.js`

```javascript
import React from 'react'
import { render } from 'react-dom'
import App from './App'

render(<App />, document.querySelector('#app'))
```



create `index.html`

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>NPM Theme module docs</title>
</head>
<body>
  <div id="app"></div>
  <script src="bundle.js"
        text="text/javascript"></script>
</body>
</html>
```



create `App.js`

```jsx
import React from 'react'
import { H1 } from 'theme'

const App = () =>
  <div>
    <H1>Heading 1</H1>
  </div>

export default App
```



This `App.js` is the heart of the docs we are creating.  This is where we will serve an example of each component the library will export.

Note we are importing from "theme" that is the alias we have set for the module in `webpack.config.js` And so these docs will resolve the imports to the contents of the `src` folder.

run the app

```bash
yarn start
```



## Define simple styled-components

@ `src/components/typography.js`

```jsx
import styled from "styled-components";

export const H1 = styled.h1`
  font-size: 30px;
  color: red;
`;

export const H2 = H1.withComponent("h2").extend`
  font-size: 24px;
`;

export const H3 = H1.withComponent("h3").extend`
  font-size: 18px;
`;

export const H4 = H1.withComponent("h4").extend`
  font-size: 15px;
  color: green;
`;

export const H5 = H1.withComponent("h4").extend`
  font-size: 12px;
`;

export const H6 = H1.withComponent("h4").extend`
  font-size: 9px;
  font-weight: 700;
`;

```



Add a button component:  `src/components/button.js`

```jsx
import styled from 'styled-components'

export default styled.button`
  background: red;
  color: white;
  border-radius: 50px;
  border: 0;
`
```



Edit `App.js`

```jsx
import React from "react";
import { H1, H2, H3, H4, H5, H6, Button } from "smerththeme";

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
```



Add `src/index.js`

```jsx
export { H1, H2, H3, H4 } from './components/typography'
export { default as Button } from './components/button'
```

Note `export { default as Button } from './components/button'` this is how we can export a separate component.

One such export might be a theme object...  we will need to import a theme object into our app to use the variables from the theme in the app in things like `globalStyles` and we will also need the theme object to use in defining our components



## Define a theme

This is an example of what a theme object might look like

@ `src/tokens/theme.js`

```jsx
export const theme = {
  breakpoints: [32, 48, 64],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  fontSizes: [12, 14, 16, 20, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  lineHeights: {
    solid: 1,
    title: 1.25,
    copy: 1.5
  },
  letterSpacings: {
    normal: "normal",
    tracked: "0.1em",
    tight: "-0.05em",
    mega: "0.25em"
  },
  fonts: {
    serif: "athelas, georgia, times, serif",
    sansSerif:
      '-apple-system, BlinkMacSystemFont, "avenir next", avenir, "helvetica neue", helvetica, ubuntu, roboto, noto, "segoe ui", arial, sans-serif'
  },
  borders: [
    0,
    "1px solid",
    "2px solid",
    "4px solid",
    "8px solid",
    "16px solid",
    "32px solid"
  ],
  radii: [0, 2, 4, 16, 9999, "100%"],
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  colors: {
    black: "#000",
    "near-black": "#111",
    "dark-gray": "#333",
    "mid-gray": "#555",
    gray: " #777",
    silver: "#999",
    "light-silver": "#aaa",
    "moon-gray": "#ccc",
    "light-gray": "#eee",
    "near-white": "#f4f4f4",
    white: "#fff",
    transparent: "transparent",
    blacks: [
      "rgba(0,0,0,.0125)",
      "rgba(0,0,0,.025)",
      "rgba(0,0,0,.05)",
      "rgba(0,0,0,.1)",
      "rgba(0,0,0,.2)",
      "rgba(0,0,0,.3)",
      "rgba(0,0,0,.4)",
      "rgba(0,0,0,.5)",
      "rgba(0,0,0,.6)",
      "rgba(0,0,0,.7)",
      "rgba(0,0,0,.8)",
      "rgba(0,0,0,.9)"
    ],
    whites: [
      "rgba(255,255,255,.0125)",
      "rgba(255,255,255,.025)",
      "rgba(255,255,255,.05)",
      "rgba(255,255,255,.1)",
      "rgba(255,255,255,.2)",
      "rgba(255,255,255,.3)",
      "rgba(255,255,255,.4)",
      "rgba(255,255,255,.5)",
      "rgba(255,255,255,.6)",
      "rgba(255,255,255,.7)",
      "rgba(255,255,255,.8)",
      "rgba(255,255,255,.9)"
    ]
    // ... and so on
  }
};

```



Obviously these theme objects can get big and unwieldy.  In addition you may want to include logic to define variables so another way of setting up the theme would be to structure the tokens folder with separate files for different tokens and assemble them in an index file into a theme object.



## Connect new theme to the app

We have a new theme so we need to update our workspace and app to use it.

- change the name in the app package.json
- run `yarn` in the project root to re-link the workspaces

We can't run the app yet and use the theme because we haven't built the theme for NPM...



## Detour: A theme object assembled from parts

Add fontSize array

@ `tokens/fontSize.js` 

```javascript
"use strict";

module.exports.fontSizes =
  // example fontSizes scale as an array
  [12, 14, 16, 20, 24, 36, 48, 80, 96];
// For typically ordinal values like font sizes that are stored in arrays, it can be helpful to create aliases by adding named properties to the object.
// aliases

```

Add the `colors` module from NPM

```bash
yarn workspace smerththeme add color
```

Add a colors object

@ `tokens/colors.js`

```jsx
var Color = require("color");

("use strict");

var primary = "rgb(16, 105, 201)"; // denim
var secondary = "rgb(251, 109, 140)"; // cadmium orange
var highlight = "rgb(237, 125, 48)"; // watermellon
var gray = "rgb(79, 91, 102)"; // fjord (black is also based on this value)
var white = "rgb(255, 255, 255)"; // alabaster
var success = "rgb(15, 230, 113)"; // spring green
var warning = "rgb(255, 46, 3)"; // ferrari red

module.exports.colors = {
  black: Color(gray)
    .darken(0.8)
    .hex(),
  white: Color(white)
    .darken(0.8)
    .hex(),
  gray: {
    main: Color(gray).hex(),
    light: Color(gray)
      .lighten(0.9)
      .hex(),
    dark: Color(gray)
      .darken(0.5)
      .hex()
  },
  primary: {
    main: Color(primary).hex(),
    light: Color(primary)
      .lighten(0.9)
      .hex(),
    dark: Color(primary)
      .darken(0.5)
      .hex()
  },
  secondary: {
    main: Color(secondary).hex(),
    light: Color(secondary)
      .lighten(0.2)
      .hex(),
    dark: Color(secondary)
      .darken(0.3)
      .hex()
  },
  highlight: {
    main: Color(highlight).hex(),
    light: Color(highlight)
      .lighten(0.2)
      .hex(),
    dark: Color(highlight)
      .darken(0.3)
      .hex()
  },
  alert: {
    success: Color(success).hex(),
    warning: Color(warning).hex()
  }
};

```

We're using the `color` module to build a color object with alot of variations based on our choice of a few colors.

You do alot more with the color module,... alot!

Assemble the theme object from these separate files

@ `index.js` add

```javascript
export { H1, H2, H3, H4, H5, H6 } from "./components/typography";
export { default as Button } from "./components/button";

import { fontSizes } from "./tokens/fontSizes.js";
import { colors } from "./tokens/colors.js";

module.exports.theme = {
  fontSizes: fontSizes,
  colors: colors
};
```

I think we could simplify this

```javascript
export { H1, H2, H3, H4, H5, H6 } from "./components/typography";
export { default as Button } from "./components/button";

import { fontSizes } from "./tokens/fontSizes.js";
import { colors } from "./tokens/colors.js";

module.exports.theme = {
  fontSizes,
  colors
};
```

Now we can restart the theme docs

```bash
yarn workspace theme start
```

Now we can use the colors in the typography components we have defined.  

@ `components/typography.js`

```jsx
import styled from "styled-components";
import { fontSizes } from "../tokens/fontSizes";
import { colors } from "../tokens/colors";

export const H1 = styled.h1`
  font-size: ${fontSizes[5]}px;
  color: ${colors.primary.main};
`;

export const H2 = H1.withComponent("h2").extend`
  font-size: ${fontSizes[4]}px;
  color: ${colors.secondary.main};
`;

export const H3 = H1.withComponent("h3").extend`
  font-size: ${fontSizes[3]}px;
  color: ${colors.highlight.main};
`;

export const H4 = H1.withComponent("h4").extend`
  font-size: ${fontSizes[2]}px;
  color: ${colors.alert.success};
`;

export const H5 = H1.withComponent("h5").extend`
  font-size: ${fontSizes[1]}px;
  color: ${colors.alert.warning};
`;

export const H6 = H1.withComponent("h6").extend`
  font-size: ${fontSizes[0]}px;
  font-weight: 700;
  color: ${colors.black};
`;

```

Obviously this rainbow of typography heading is just to make sure we can use the color object...







