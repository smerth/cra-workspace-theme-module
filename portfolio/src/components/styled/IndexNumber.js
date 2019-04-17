import styled from "styled-components";

export const Index = styled.div`
  position: absolute;
  bottom: 0;
  z-index: -1;
  font-size: 3em;
  h1 {
    margin: 0;
    font-weight: bold;
    color: ${props => props.theme.colors.secondary.main};
    opacity: 0.5;
    transform: translateY(20%);
  }
`;
