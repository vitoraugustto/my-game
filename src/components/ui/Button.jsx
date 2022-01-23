import styled from "styled-components";

import { useEnemyStatus } from "../../contexts/EnemyStatus";
import { useRoleStatus } from "../../contexts/RoleStatus";

const StyledButton = styled.button`
  background-color: #202020;
  color: white;
  padding: 8px 0;
  width: 100%;
  border: 3px solid #606060;
  outline: none;
  font-size: 20px;

  transition: 0.2s;

  :hover {
    background-color: #101010;
    border: 3px solid #505050;
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
