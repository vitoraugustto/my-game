import { useEffect } from "react";

import { useSelectedCharacter } from "../contexts/SelectedCharacter";
import { useEnemyStatus } from "../contexts/EnemyStatus";
import { useRoleStatus } from "../contexts/RoleStatus";

import allEnemies from "../characters/enemies";
import { enemies } from "../characters/enemies";

import { Avatar } from "./Avatar";

import "./Status.css";

export const Status = (props) => {
  const { selectedEnemy } = useSelectedCharacter();
  const { enemyHitPoints, enemyManaPoints, enemyAttack, enemyDefense } =
    useEnemyStatus();
  const { roleHitPoints, roleManaPoints, roleAttack, roleDefense } =
    useRoleStatus();

  if (!sessionStorage.getItem("goblin")) {
    for (let i = 0; i < allEnemies.length; i++) {
      sessionStorage.setItem(
        allEnemies[i],
        JSON.stringify({
          hitPoints: enemies[allEnemies[i]].baseStatus.baseHitPoints,
          manaPoints: enemies[allEnemies[i]].baseStatus.baseManaPoints,
          attack: enemies[allEnemies[i]].baseStatus.baseAttack,
          defense: enemies[allEnemies[i]].baseStatus.baseDefense,
        })
      );
    }
  }

  useEffect(() => {
    const monsterStatus = JSON.parse(sessionStorage.getItem(selectedEnemy));

    monsterStatus.hitPoints = enemyHitPoints;

    if (monsterStatus.hitPoints <= 0) monsterStatus.hitPoints = 0;

    if (monsterStatus.hitPoints !== undefined) {
      sessionStorage.setItem(selectedEnemy, JSON.stringify(monsterStatus));
    }
  }, [enemyHitPoints]);

  function Status() {
    if (props.isEnemy === true) {
      return (
        <div className="status-container">
          <div className="attributes-container">
            {enemyHitPoints <= 0 ? (
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

          <Avatar isEnemy />
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

          <Avatar />
        </div>
      );
    }
  }

  return <Status />;
};
