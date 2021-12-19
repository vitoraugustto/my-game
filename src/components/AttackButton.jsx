import { useEnemyStatus } from "../contexts/EnemyStatus";
import { useRoleStatus } from "../contexts/RoleStatus";

import "./AttackButton.css";

export const AttackButton = ({ children, ...props }) => {
  const { attack } = useRoleStatus();
  const { enemyHitPoints } = useEnemyStatus();

  console.log(enemyHitPoints);

  return (
    <button
      onClick={() => attack()}
      style={{
        margin: props.margin,
        cursor: enemyHitPoints === 0 ? "not-allowed" : "pointer",
      }}
      className="attack-button"
      disabled={enemyHitPoints === 0 ? true : false}
    >
      {children}
    </button>
  );
};
