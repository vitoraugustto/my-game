import { useSelectedCharacter } from "../contexts/SelectedCharacter";

import "./AttackButton.css";

export const AttackButton = ({ attack, children, ...props }) => {
  const { selectedEnemy } = useSelectedCharacter();

  // persistEnemy(selectedEnemy, enemyHitPoints);
  return (
    <button
      // onClick={() => setEnemyHitPoints(enemyHitPoints - attack())}
      style={{ margin: props.margin }}
      className="attack-button"
    >
      {children}
    </button>
  );
};
