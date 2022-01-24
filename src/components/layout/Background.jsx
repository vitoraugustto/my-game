import styled from "styled-components";

const StyledBackground = styled.div`
  min-height: 100%;
  min-width: 100%;
  background-color: #404040;
  padding: 20px;

  position: absolute;
`;

export default function Background({ children }) {
  return <StyledBackground>{children}</StyledBackground>;
}
