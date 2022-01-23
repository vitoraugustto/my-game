import styled from "styled-components";
import {
  BLACK_1,
  BORDER_RADIUS,
  GRAY_1,
  LETTER_SPACING_1,
  MEDIUM_FONT_SIZE,
  NORMAL_FONT_WEIGHT,
} from "../../theme/constants";

const StyledSelect = styled.select`
  display: block;
  padding: 4px 2px;
  color: white;
  background-color: ${BLACK_1};
  font-size: ${MEDIUM_FONT_SIZE};
  text-align: center;
  border: 3px solid ${GRAY_1};
  outline: none;
  font-weight: ${NORMAL_FONT_WEIGHT};
  letter-spacing: ${LETTER_SPACING_1};
  border-radius: ${BORDER_RADIUS};
`;

export default function Select({ children, ...props }) {
  return (
    <StyledSelect
      style={{ width: props.width }}
      defaultValue={props.defaultValue}
      onChange={props.onChange}
    >
      {children}
    </StyledSelect>
  );
}
