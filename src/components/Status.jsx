import "./Status.css";

import { Avatar } from "./Avatar";

export const Status = ({
  selectedRole,
  selectedEnemy,
  baseRoleStatus,
  baseEnemyStatus,
  ...props
}) => {
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

          {selectedEnemy === "" ? "" : <Avatar selectedEnemy={selectedEnemy} />}
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

          {selectedRole === "" ? "" : <Avatar selectedRole={selectedRole} />}
        </div>
      );
    }
  }

  return <Status />;
};
