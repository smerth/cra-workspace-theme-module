import styled from "styled-components";
import { width, color } from "styled-system";

const LayoutSite = styled.div`
  ${color}
  display: grid;
  grid-template-columns: 50px auto 50px;
`;

LayoutSite.propTypes = {
  ...color.propTypes
};

export default LayoutSite;
