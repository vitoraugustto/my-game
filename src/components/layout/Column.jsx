import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Column({ children }) {
  return <StyledDiv>{children}</StyledDiv>;
}
