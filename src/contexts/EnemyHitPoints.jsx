import { createContext, useState, useContext } from "react";
import { useSelectedCharacter } from "./SelectedCharacter";

import { enemies } from "../characters/enemies";

const EnemyHitPointsContext = createContext();

export default function EnemyHitPointsProvider({ children }) {
  const { selectedEnemy } = useSelectedCharacter();

  const [enemyHitPoints, setEnemyHitPoints] = useState(
    selectedEnemy !== "" ? enemies[selectedEnemy].baseStatus.baseHitPoints : ""
  );

  return (
    <EnemyHitPointsContext.Provider
      value={{
        enemyHitPoints,
        setEnemyHitPoints,
      }}
    >
      {children}
    </EnemyHitPointsContext.Provider>
  );
}

export const useEnemyHitPoints = () => {
  const context = useContext(EnemyHitPointsContext);

  return context;
};
