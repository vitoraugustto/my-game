import styled from "styled-components";

import { useEnemyStatus } from "../../contexts/EnemyStatus";
import { useRoleStatus } from "../../contexts/RoleStatus";
import {
  MEDIUM_FONT_SIZE,
  LETTER_SPACING_1,
  NORMAL_FONT_WEIGHT,
  BLACK_1,
  BORDER_RADIUS,
  GRAY_1,
} from "../../theme/constants";

const StyledButton = styled.button`
  background-color: ${BLACK_1};
  color: #fff;
  padding: 8px 0;
  width: 100%;
  border: 3px solid ${GRAY_1};
  outline: none;
  border-radius: ${BORDER_RADIUS};
  font-size: ${MEDIUM_FONT_SIZE};
  letter-spacing: ${LETTER_SPACING_1};
  font-weight: ${NORMAL_FONT_WEIGHT};

  transition: 0.2s;

  :hover {
    filter: brightness(120%);
    transform: scale(1.01);
  }
`;

export default function Button({ children, ...props }) {
  const { attack } = useRoleStatus();
  const { enemyHitPoints } = useEnemyStatus();

  return (
    <StyledButton
      onClick={() => attack()}
      style={{
        margin: props.margin,
        cursor: enemyHitPoints === 0 ? "not-allowed" : "pointer",
      }}
      disabled={enemyHitPoints === 0 ? true : false}
    >
      {children}
    </StyledButton>
  );
}
