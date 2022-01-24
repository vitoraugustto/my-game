import styled from "styled-components";

const SMALL_IMAGE = "32px";
const MEDIUM_IMAGE = "64px";
const LARGE_IMAGE = "128px";

const StyledImage = styled.img`
  display: inline-block;
`;

export default function Image({
  small,
  medium,
  large,
  transition,
  mouseOver,
  mouseOut,
  src,
}) {
  return (
    <StyledImage
      style={{
        width: small
          ? SMALL_IMAGE
          : medium
          ? MEDIUM_IMAGE
          : large
          ? LARGE_IMAGE
          : "",
        transition: transition,
      }}
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}
      src={src}
    ></StyledImage>
  );
}
