# Export Design Tokens from the Theme



## Design tokens



Lets develop the theme a bit

Lets add a file to the theme to hold color design tokens

@ `theme/colors.js`

```javascript
export default {
  colors: {
    black: '#000e1a',
    white: '#fff',
    blue: '#007ce0',
    navy: '#004175'
  }
}
```

In order to use these variables (design tokens) outside of the theme we need to export them from the theme.

@ `theme/index.js`

```javascript
export { default as colors } from "./colors";
```

This statement allows us to export the file contents from `./colors` without first importing the file, very convenient.

Now we can import these colors and use them in a component.  We could use them in components defined in the theme itself or in the CRA we are working on.  

Using the design tokens would be as simple as this:

```jsx
import styled from "styled-components";
import { colors } from "theme";

export const H1 = styled.h1`
  color: ${colors.colors.blue};
`;
export const H2 = styled.h2`
  color: ${colors.colors.navy};
`;
```

Obviously we can shape and name our object better so we don't have silly variables like `${colors.colors.navy}`



## Organising the theme

In the `theme` lets make a folder for design tokens called "tokens" and another folder called "components".  Put the `colors.js` file into the tokens folder.  

Some themes list all of the design tokens in a single vast object that might look like this:

…



However I would like separate files in `tokens` to handle each group of design tokens such as:  `colors.js`, `typography.js`, `spacing.js`, etc...   Because scrolling through endless objects is a pain.  

Ideally we could import an object called `theme` from the theme which contains all the contents of the various token objects in the theme.

```jsx
import theme from "theme"
```

or maybe this would do?

```javascript
import {*} from "theme"
```

But it would also be good if we could import only what we need in any given component, like this...

```javascript
import {colors} from "theme"
```



I think we might be able to accomplish this by setting up our index file like this

@ `theme/index.js`

```javascript
"use strict";

var { colors } = require("./tokens/colors.js");
var { typography } = require("./tokens/typography.js");

module.exports.theme = {
  colors: colors,
  typography: typography
};

```

or, because keys and values for the theme object are the same we could use the short cut syntax

```javascript
"use strict";

var { colors } = require("./tokens/colors.js");
var { typography } = require("./tokens/typography.js");

module.exports.theme = {
  colors
  typography
};
```

And we can update the export from `colors.js`

```javascript
"use strict";

module.exports.colors = {
  black: "#000e1a",
  white: "#fff",
  blue: "#007ce0",
  navy: "#004175",
  denim: "#1069c9",
  cadmium: "#ed7d30"
};

```



Now  we should be able to access the design tokens through props in any styled components.


