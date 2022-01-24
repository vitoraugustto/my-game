import styled from "styled-components";
import { DEFAULT_LETTER_SPACING, SMALL_FONT_SIZE } from "../../theme/constants";

const StyledLi = styled.li`
  font-size: ${SMALL_FONT_SIZE};
  letter-spacing: ${DEFAULT_LETTER_SPACING};
  list-style: none;
  margin: 7px;
`;

export default function ListItem({ children }) {
  return <StyledLi>{children}</StyledLi>;
}
