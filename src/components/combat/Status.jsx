import { useEffect } from "react";

import { useSelectedCharacter } from "../../contexts/SelectedCharacter";
import { useEnemyStatus } from "../../contexts/EnemyStatus";
import { useRoleStatus } from "../../contexts/RoleStatus";

import allEnemies from "../../characters/enemies";
import { enemies } from "../../characters/enemies";

import ListItem from "../ui/ListItem";
import Text from "../ui/Text";
import Span from "../ui/Span";
import Column from "../layout/Column";

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

  const STATUS_WIDTH = "164px";

  function Status() {
    if (props.isEnemy) {
      return (
        <Column>
          {enemyHitPoints <= 0 ? (
            <div style={{ maxWidth: STATUS_WIDTH }}>
              <Span>
                {`O ${selectedEnemy} morreu. Sem drops, ainda não existem.`}
              </Span>
            </div>
          ) : (
            <>
              <Text>Status do Monstro</Text>
              <ul>
                <ListItem>HP: {enemyHitPoints}</ListItem>
                <ListItem>MP: {enemyManaPoints}</ListItem>
                <ListItem>Ataque: {enemyAttack}</ListItem>
                <ListItem>Defesa: {enemyDefense}</ListItem>
              </ul>
            </>
          )}
        </Column>
      );
    } else {
      return (
        <Column>
          <Text>Status do Personagem</Text>
          <ul>
            <ListItem>HP: {roleHitPoints}</ListItem>
            <ListItem>MP: {roleManaPoints}</ListItem>
            <ListItem>Ataque: {roleAttack}</ListItem>
            <ListItem>Defesa: {roleDefense}</ListItem>
          </ul>
        </Column>
      );
    }
  }

  return <Status />;
};
