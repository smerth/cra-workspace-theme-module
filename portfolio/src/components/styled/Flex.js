import styled, { css } from "styled-components";
import { Div } from "./HtmlTags";

export const Flex = styled(Div)`
  display: flex;
  ${({ column }) =>
    column &&
    css`
      flex-direction: column;
    `}
  ${({ justify }) =>
    justify &&
    css`
      justify-content: ${justify};
    `}
  ${({ align }) =>
    align &&
    css`
      align-content: ${align};
    `}
`;
