import styled from "styled-components";
import media from "./Media.js";
import { Div } from "./HtmlTags";

export const Container = styled(Div)`
  background-color: ${props => props.theme.colors.pageBackground};
  width: 80vw;
  margin: 0 auto;
  /* Must match the container widths - use a token */
  ${media.tablet`
    width: 90vw;
  `}
  ${media.phone`
    width: 95vw;
  `};
`;
