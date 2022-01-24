import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export default function Row({ children, ...props }) {
  return <StyledDiv style={{ padding: props.padding }}>{children}</StyledDiv>;
}
