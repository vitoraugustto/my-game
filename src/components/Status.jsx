import { useEffect } from "react";

import { useSelectedCharacter } from "../contexts/SelectedCharacter";
import { useEnemyStatus } from "../contexts/EnemyStatus";
import { useRoleStatus } from "../contexts/RoleStatus";

import allEnemies from "../characters/enemies";
import { enemies } from "../characters/enemies";

import { Avatar } from "./Avatar";
import Text from "./ui/Text";
import Span from "./ui/Span";

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
                <Text>Status do Monstro</Text>
                <Span>HP: {enemyHitPoints}</Span>
                <Span>MP: {enemyManaPoints}</Span>
                <Span>Ataque: {enemyAttack}</Span>
                <Span>Defesa: {enemyDefense}</Span>
              </>
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div className="status-container">
          <div className="attributes-container">
            <Text>Status do Personagem</Text>
            <Span>HP: {roleHitPoints}</Span>
            <Span>MP: {roleManaPoints}</Span>
            <Span>Ataque: {roleAttack}</Span>
            <Span>Defesa: {roleDefense}</Span>
          </div>
        </div>
      );
    }
  }

  return <Status />;
};
