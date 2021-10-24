import { Avatar } from "./Avatar";

import { useSelectedCharacter } from "../contexts/SelectedCharacter";
import { useBaseStatus } from "../contexts/BaseStatus";

import "./Status.css";

export const Status = (props) => {
  const { selectedRole, selectedEnemy } = useSelectedCharacter();
  const { baseEnemyStatus, baseRoleStatus } = useBaseStatus();

  let isEnemy = props.isEnemy;

  function Status() {
    if (isEnemy === true) {
      return (
        <div className="status-container">
          <div className="attributes-container">
            {baseEnemyStatus.baseHitPoints <= 0 ? (
              `O ${selectedEnemy} morreu. Sem drops, ainda não existem.`
            ) : (
              <>
                <p>Status do Monstro</p>
                <span>HP: {baseEnemyStatus.baseHitPoints}</span>
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
