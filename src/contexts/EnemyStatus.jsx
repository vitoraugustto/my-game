import { useState, useContext, createContext, useEffect } from "react";

import { enemies } from "../characters/enemies";

import { useSelectedCharacter } from "./SelectedCharacter";

const EnemyStatusContext = createContext();

export default function EnemyStatusProvider({ children }) {
  const { selectedEnemy } = useSelectedCharacter();

  const [EnemyHitPoints, setEnemyHitPoints] = useState();
  const [EnemyManaPoints, setEnemyManaPoints] = useState();
  const [EnemyAttack, setEnemyAttack] = useState();
  const [EnemyDefense, setEnemyDefense] = useState();

  // useEffect(() => {
  //   setEnemyHitPoints(
  //     sessionStorage.getItem(selectedEnemy) === null
  //       ? enemies[selectedEnemy].baseStatus.baseHitPoints
  //       : JSON.parse(sessionStorage.getItem(selectedEnemy)).hitPoints
  //   );

  //   setEnemyManaPoints(enemies[selectedEnemy].baseStatus.baseManaPoints);

  //   setEnemyAttack(enemies[selectedEnemy].baseStatus.baseAttack);

  //   setEnemyDefense(enemies[selectedEnemy].baseStatus.baseDefense);
  // }, [selectedEnemy]);

  return (
    <EnemyStatusContext.Provider
      value={{
        EnemyHitPoints,
        setEnemyHitPoints,
        EnemyManaPoints,
        setEnemyManaPoints,
        EnemyAttack,
        setEnemyAttack,
        EnemyDefense,
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
