import styled from "styled-components";

const SMALL_IMAGE = "32px";
const MEDIUM_IMAGE = "64px";
const LARGE_IMAGE = "128px";

const StyledImage = styled.img`
  height: 100%;
  display: inline-block;
`;

export default function Image({
  small = false,
  medium = false,
  large = false,
  ...props
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
      }}
      src={props.src}
    ></StyledImage>
  );
}
