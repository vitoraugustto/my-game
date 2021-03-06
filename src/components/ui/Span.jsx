import styled from "styled-components";
import {
  DEFAULT_LETTER_SPACING,
  SMALL_FONT_SIZE,
  MEDIUM_FONT_SIZE,
  LARGE_FONT_SIZE,
} from "../../theme/constants";

const StyledSpan = styled.span`
  font-size: ${SMALL_FONT_SIZE};
  letter-spacing: ${DEFAULT_LETTER_SPACING};
`;

export default function Span({ small, medium, large, color, children }) {
  return (
    <StyledSpan
      style={{
        color: color,
        fontSize: small
          ? SMALL_FONT_SIZE
          : medium
          ? MEDIUM_FONT_SIZE
          : large
          ? LARGE_FONT_SIZE
          : "",
      }}
    >
      {children}
    </StyledSpan>
  );
}
