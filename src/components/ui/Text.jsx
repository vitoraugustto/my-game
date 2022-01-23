import styled from "styled-components";

const SMALL_TEXT = "18px";
const MEDIUM_TEXT = "22px";
const LARGE_TEXT = "28px";

const StyledParagraph = styled.p`
  font-size: ${SMALL_TEXT};
  color: white;
  letter-spacing: 0.5px;
`;

export default function Text({ small, medium, large, children }) {
  return (
    <StyledParagraph
      style={{
        fontSize: small
          ? SMALL_TEXT
          : medium
          ? MEDIUM_TEXT
          : large
          ? LARGE_TEXT
          : "",
      }}
    >
      {children}
    </StyledParagraph>
  );
}
