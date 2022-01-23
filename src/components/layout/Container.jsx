import styled from "styled-components";
import { BLACK_1, BLACK_2, BORDER_RADIUS } from "../../theme/constants";

const StyledContainer = styled.div`
  background-color: ${BLACK_1};
  padding: 5px;
  margin: 0 auto;
  border-radius: ${BORDER_RADIUS};
  border: 3px solid ${BLACK_2};
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
