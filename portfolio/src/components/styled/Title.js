import styled from "styled-components";
import { H1 } from "./HtmlTags";

export const Title = styled(H1)`
  margin: 0 0 1em 0;
  font-size: ${props => props.theme.fontSizes[3]}px;
  color: ${props => props.theme.colors.deco[2]};
`;
