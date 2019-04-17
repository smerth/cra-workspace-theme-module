# Altering CSS with Props

Add a background image to the hero component

```jsx
 export const HeroImage = styled.div`
  height: 100vh;
  color: ${props => props.theme.colors.denim};
  background-image: url('${require("../../assets/hero.gif")}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  display: flex;
  flex-direction: column;
  /* horizontally align */
  text-align: center;
  /* vertically align */
  align-content: center
`;
```

Use a prop to build a reveal component

```jsx
export const RevealP = styled.p`
  position: relative;
  &:after {
    content: " ";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.denim};
    transform-origin: left;
    transform: rotateY(90deg);
    transition: transform 1s;
  }
  ${({ hide }) =>
    hide &&
    css`
      &:after {
        transform: rotateY(0deg);
      }
    `}
`;
```



And now  @ Home.js  import ` RevealP` and replace the `<p>` tag with `<RevealP>`.

Now if you place the prop `hide` on the ` <RevealP>` component the text will be hidden by the background of the pseudo content element.  

