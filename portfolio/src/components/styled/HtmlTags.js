import styled, { css } from "styled-components";
import { color } from "styled-system";

export const A = styled.a`
  color: ${props => props.theme.colors.primary.main};
  text-decoration: none;
  position: relative;

  &:after {
    content: " ";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 10%;
    width: 100%;
    background-color: ${props => props.theme.colors.primary.main};
    z-index: -1;
    transition: height 0.1s, background-color 0.1s;
  }

  &:hover:after {
    height: 40%;
    background-color: ${props => props.theme.colors.secondary.main};
  }
`;

export const [H1, H2, H3, H4, H5, H6, P, Blockquote, Code] = [
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "p",
  "blockquote",
  "code"
].map(
  tag => styled[tag]`
    ${color}
    ${({ align }) => align && `text-align: ${align};`}
  `
);

export const Div = styled.div`
  ${({ marginBottom }) =>
    marginBottom &&
    css`
      margin-bottom: ${marginBottom};
    `}
  ${({ marginLeft }) =>
    marginLeft &&
    css`
      margin-left: ${marginLeft};
    `}
  ${({ marginRight }) =>
    marginRight &&
    css`
      margin-right: ${marginRight};
    `}
  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${marginTop};
    `}
`;
