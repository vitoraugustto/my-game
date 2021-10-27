import { useEnemyHitPoints } from "../contexts/EnemyHitPoints";
import { useSelectedCharacter } from "../contexts/SelectedCharacter";
import { persistEnemy } from "../utils/functions";

import "./AttackButton.css";

export const AttackButton = ({ children, attack, ...props }) => {
  const { enemyHitPoints, setEnemyHitPoints } = useEnemyHitPoints();
  const { selectedEnemy } = useSelectedCharacter();

  persistEnemy(selectedEnemy, enemyHitPoints);

  return (
    <button
      style={{ margin: props.margin }}
      onClick={() => setEnemyHitPoints(enemyHitPoints - attack())}
      className="attack-button"
    >
      {children}
    </button>
  );
};
