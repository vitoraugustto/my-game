import { Avatar } from "./Avatar";

import { useSelectedCharacter } from "../contexts/SelectedCharacter";
import { useEnemyHitPoints } from "../contexts/EnemyHitPoints";

import { roles } from "../characters/roles";
import { enemies } from "../characters/enemies";

import "./Status.css";
import { useEffect } from "react/cjs/react.development";

export const Status = (props) => {
  const { selectedRole, selectedEnemy } = useSelectedCharacter();
  const { enemyHitPoints, setEnemyHitPoints } = useEnemyHitPoints();

  let isEnemy = props.isEnemy;

  let baseRoleStatus;
  let baseEnemyStatus;

  selectedRole !== ""
    ? (baseRoleStatus = roles[selectedRole].baseStatus)
    : (baseRoleStatus = "");

  selectedEnemy !== ""
    ? (baseEnemyStatus = enemies[selectedEnemy].baseStatus)
    : (baseEnemyStatus = "");

  useEffect(() => {
    setEnemyHitPoints(
      selectedEnemy !== ""
        ? enemies[selectedEnemy].baseStatus.baseHitPoints
        : ""
    );
  }, [selectedEnemy]);

  function Status() {
    if (isEnemy === true) {
      return (
        <div className="status-container">
          <div className="attributes-container">
            {enemyHitPoints !== "" && enemyHitPoints <= 0 ? (
              `O ${selectedEnemy} morreu. Sem drops, ainda não existem.`
            ) : (
              <>
                <p>Status do Monstro</p>
                <span>HP: {enemyHitPoints}</span>
                <span>MP: {baseEnemyStatus.baseManaPoints}</span>
                <span>Ataque: {baseEnemyStatus.baseAttack}</span>
                <span>Defesa: {baseEnemyStatus.baseDefense}</span>
              </>
            )}
          </div>

          {selectedEnemy === "" ? (
            ""
          ) : (
            <Avatar isEnemy={isEnemy} selectedEnemy={selectedEnemy} />
          )}
        </div>
      );
    } else {
      return (
        <div className="status-container">
          <div className="attributes-container">
            <p>Status do Personagem</p>
            <span>HP: {baseRoleStatus.baseHitPoints}</span>
            <span>MP: {baseRoleStatus.baseManaPoints}</span>
            <span>Ataque: {baseRoleStatus.baseAttack}</span>
            <span>Defesa: {baseRoleStatus.baseDefense}</span>
          </div>

          {selectedRole === "" ? (
            ""
          ) : (
            <Avatar isEnemy={isEnemy} selectedRole={selectedRole} />
          )}
        </div>
      );
    }
  }

  return <Status />;
};
