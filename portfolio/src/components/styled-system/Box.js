import styled from "styled-components";
import { color, space, width, height, fontSize } from "styled-system";

const Box = styled.div`
  ${space}
  ${width}
  ${height}
  ${color}
  ${fontSize}
  padding: ${props => (props.p ? props.p : "1rem")};
`;

// prop types can also be added from the style functions
Box.propTypes = {
  ...space.propTypes,
  ...width.propTypes,
  ...height.propTypes,
  ...color.propTypes,
  ...fontSize.propTypes
};

Box.defaultProps = {
  width: {
    sm: 1,
    md: 1 / 2,
    lg: 1 / 3
  }
};

Box.displayName = "Box";

export default Box;
