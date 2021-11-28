import { useEnemyStatus } from "../contexts/EnemyStatus";

import "./AttackButton.css";

export const AttackButton = ({ attack, children, ...props }) => {
  const { enemyHitPoints, setEnemyHitPoints } = useEnemyStatus();

  return (
    <button
      onClick={() => setEnemyHitPoints(enemyHitPoints - attack())}
      style={{ margin: props.margin }}
      className="attack-button"
    >
      {children}
    </button>
  );
};
