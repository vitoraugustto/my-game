import styled from "styled-components";

const SMALL_SPAN = "16px";
const MEDIUM_SPAN = "20px";
const LARGE_SPAN = "26px";

const StyledSpan = styled.span`
  font-size: ${SMALL_SPAN};
  color: #fff;
  letter-spacing: 0.5px;
`;

export default function Span({
  small,
  medium,
  large,
  color,
  margin,
  children,
}) {
  return (
    <StyledSpan
      style={{
        color: color,
        margin: margin,
        fontSize: small
          ? SMALL_SPAN
          : medium
          ? MEDIUM_SPAN
          : large
          ? LARGE_SPAN
          : "",
      }}
    >
      {children}
    </StyledSpan>
  );
}
