# Responsiveness with styled-components

There are alot of ways to handle responsive styling.   This is  just one idea about how to use media calls

Add a file to define media calls

```javascript
import { css } from "styled-components";

const sizes = {
  phone: 376,
  tablet: 768,
  desktop: 992,
  giant: 1170
};

function phone(...args) {
  return css`
    @media (max-width: ${sizes.phone}px) {
      ${css(...args)}
    }
  `;
}

function tablet(...args) {
  return css`
    @media (max-width: ${sizes.tablet}px) {
      ${css(...args)}
    }
  `;
}

function desktop(...args) {
  return css`
    @media (max-width: ${sizes.desktop}px) {
      ${css(...args)}
    }
  `;
}

function giant(...args) {
  return css`
    @media (max-width: ${sizes.giant}px) {
      ${css(...args)}
    }
  `;
}

const media = {
  phone,
  tablet,
  desktop,
  giant
};

export default media;

```



This can be optimized to:

```jsx
import { css } from "styled-components";

const sizes = {
  phone: 376,
  tablet: 768,
  desktop: 992,
  giant: 1170
};

const media = Object.keys(sizes).reduce((finalMedia, size) => {
  return {
    ...finalMedia,
    [size]: function(...args) {
      return css`
        @media (max-width: ${sizes[size]}px) {
          ${css(...args)}
        }
      `;
    }
  };
}, {});

export default media;

```



You could use this in another component like this:

@ Container.js

```jsx
import media from "./Media.js";

...

export const Container = styled(Div)`
  padding-left: 120px;
  padding-right: 120px;
  padding-top: 30px;
  ${media.tablet`
    padding-left: 30px;
    padding-right: 30px;
    padding-top: 15px;
  `}
  ${media.phone`
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 15px;
  `};
`;
```



Remember the order of the media calls matters, large to small or the smaller will be overwritten by the larger css… 

… actually I think this is set up backwards, it should be mobile first (the default is mobile...)



