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

  useEffect(() => {
    if (selectedEnemy !== "") {
      sessionStorage.getItem(selectedEnemy) === null
        ? setEnemyHitPoints(enemies[selectedEnemy].baseStatus.baseHitPoints)
        : setEnemyHitPoints(
            JSON.parse(sessionStorage.getItem(selectedEnemy)).hitPoints
          );

      setEnemyManaPoints(enemies[selectedEnemy].baseStatus.baseManaPoints);

      setEnemyAttack(enemies[selectedEnemy].baseStatus.baseAttack);

      setEnemyDefense(enemies[selectedEnemy].baseStatus.baseDefense);
    }
  }, [selectedEnemy]);

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
