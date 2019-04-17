import styled, { css } from "styled-components";

export const RevealP = styled.p`
  position: relative;
  padding: 3em;
  margin: 0;
  &:after {
    content: "";
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.colors.primary.main};
    transform-origin: ${props => props.origin};
    transform: rotateY(180deg);
    transition: transform 3s;
  }
  ${({ hide }) =>
    hide &&
    css`
      &:after {
        transform: rotateY(0deg);
      }
    `}
`;
