import { useSelectedCharacter } from "../contexts/SelectedCharacter";
import { useEnemyStatus } from "../contexts/EnemyStatus";
import { useRoleStatus } from "../contexts/RoleStatus";

import { Avatar } from "./Avatar";

import "./Status.css";

export const Status = (props) => {
  const { selectedRole, selectedEnemy } = useSelectedCharacter();
  const { enemyHitPoints, enemyManaPoints, enemyAttack, enemyDefense, isDead } =
    useEnemyStatus();
  const { roleHitPoints, roleManaPoints, roleAttack, roleDefense } =
    useRoleStatus();

  // useEffect(() => {
  //   sessionStorage.setItem(
  //     selectedEnemy,
  //     JSON.stringify({
  //       hitPoints: enemyHitPoints,
  //       manaPoints: enemyManaPoints,
  //       attack: enemyAttack,
  //       defense: enemyDefense,
  //     })
  //   );
  // }, [selectedEnemy]);

  function Status() {
    if (props.isEnemy === true) {
      return (
        <div className="status-container">
          <div className="attributes-container">
            {isDead ? (
              `O ${selectedEnemy} morreu. Sem drops, ainda não existem.`
            ) : (
              <>
                <p>Status do Monstro</p>
                <span>HP: {enemyHitPoints}</span>
                <span>MP: {enemyManaPoints}</span>
                <span>Ataque: {enemyAttack}</span>
                <span>Defesa: {enemyDefense}</span>
              </>
            )}
          </div>

          {selectedEnemy === "" ? "" : <Avatar isEnemy={props.isEnemy} />}
        </div>
      );
    } else {
      return (
        <div className="status-container">
          <div className="attributes-container">
            <p>Status do Personagem</p>
            <span>HP: {roleHitPoints}</span>
            <span>MP: {roleManaPoints}</span>
            <span>Ataque: {roleAttack}</span>
            <span>Defesa: {roleDefense}</span>
          </div>

          {selectedRole === "" ? "" : <Avatar isEnemy={props.isEnemy} />}
        </div>
      );
    }
  }

  return <Status />;
};
