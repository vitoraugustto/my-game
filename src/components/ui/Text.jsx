import styled from "styled-components";
import {
  DEFAULT_LETTER_SPACING,
  NORMAL_FONT_WEIGHT,
  SMALL_FONT_SIZE,
  MEDIUM_FONT_SIZE,
  LARGE_FONT_SIZE,
} from "../../theme/constants";

const StyledParagraph = styled.p`
  font-size: ${MEDIUM_FONT_SIZE};
  color: #fff;
  letter-spacing: ${DEFAULT_LETTER_SPACING};
  font-weight: ${NORMAL_FONT_WEIGHT};
`;

export default function Text({ small, medium, large, children }) {
  return (
    <StyledParagraph
      style={{
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
    </StyledParagraph>
  );
}
