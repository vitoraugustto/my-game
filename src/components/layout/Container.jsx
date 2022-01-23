import styled from "styled-components";

const StyledContainer = styled.div`
  background-color: #202020;
  padding: 5px;
  margin: 0 auto;
  border-radius: 10px;
  border: 1px solid #606060;
`;

export default function Container({ width, alignCenter, children }) {
  return (
    <StyledContainer
      style={{ width: width, textAlign: alignCenter ? "center" : "" }}
    >
      {children}
    </StyledContainer>
  );
}
