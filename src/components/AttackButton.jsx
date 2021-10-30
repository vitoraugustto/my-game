<<<<<<< HEAD
import { useSelectedCharacter } from "../contexts/SelectedCharacter";

import "./AttackButton.css";

export const AttackButton = ({ attack, children, ...props }) => {
  const { selectedEnemy } = useSelectedCharacter();

  // persistEnemy(selectedEnemy, enemyHitPoints);
=======
import { useEnemyHitPoints } from "../contexts/EnemyHitPoints";
import { useSelectedCharacter } from "../contexts/SelectedCharacter";
import { persistEnemy } from "../utils/functions";

import "./AttackButton.css";

export const AttackButton = ({ children, attack, ...props }) => {
  const { enemyHitPoints, setEnemyHitPoints } = useEnemyHitPoints();
  const { selectedEnemy } = useSelectedCharacter();

  persistEnemy(selectedEnemy, enemyHitPoints);

>>>>>>> bf230d72c674b0f651bdb94590ea9cdedc5fc770
  return (
    <button
      // onClick={() => setEnemyHitPoints(enemyHitPoints - attack())}
      style={{ margin: props.margin }}
<<<<<<< HEAD
=======
      onClick={() => setEnemyHitPoints(enemyHitPoints - attack())}
>>>>>>> bf230d72c674b0f651bdb94590ea9cdedc5fc770
      className="attack-button"
    >
      {children}
    </button>
  );
};
