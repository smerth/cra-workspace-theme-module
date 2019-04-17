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
