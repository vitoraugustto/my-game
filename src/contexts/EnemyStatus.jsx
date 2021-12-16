import { useState, useContext, createContext, useEffect } from "react";

import { enemies } from "../characters/enemies";

import { useSelectedCharacter } from "./SelectedCharacter";

const EnemyStatusContext = createContext();

export default function EnemyStatusProvider({ children }) {
  const { selectedEnemy } = useSelectedCharacter();

  const [enemyHitPoints, setEnemyHitPoints] = useState();
  const [enemyManaPoints, setEnemyManaPoints] = useState();
  const [enemyAttack, setEnemyAttack] = useState();
  const [enemyDefense, setEnemyDefense] = useState();
  const [isDead, setIsDead] = useState(false);

  useEffect(() => {
    // sessionStorage.getItem(selectedEnemy) === null
    //   ? setEnemyHitPoints(enemies[selectedEnemy].baseStatus.baseHitPoints)
    //   : setEnemyHitPoints(
    //       JSON.parse(sessionStorage.getItem(selectedEnemy)).hitPoints
    //     );

    setEnemyHitPoints(enemies[selectedEnemy].baseStatus.baseHitPoints);

    setEnemyManaPoints(enemies[selectedEnemy].baseStatus.baseManaPoints);

    setEnemyAttack(enemies[selectedEnemy].baseStatus.baseAttack);

    setEnemyDefense(enemies[selectedEnemy].baseStatus.baseDefense);

    setIsDead(false);
  }, [selectedEnemy]);

  useEffect(() => {
    if (enemyHitPoints <= 0) setIsDead(true);
  }, [enemyHitPoints]);

  return (
    <EnemyStatusContext.Provider
      value={{
        enemyHitPoints,
        setEnemyHitPoints,
        enemyManaPoints,
        setEnemyManaPoints,
        enemyAttack,
        setEnemyAttack,
        enemyDefense,
        setEnemyDefense,
        isDead,
        setIsDead,
      }}
    >
      {children}
    </EnemyStatusContext.Provider>
  );
}

export const useEnemyStatus = () => {
  const context = useContext(EnemyStatusContext);

  return context;
};
