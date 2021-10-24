import { createContext, useContext } from "react";

import allRoles, { roles } from "../characters/roles";
import allEnemies, { enemies } from "../characters/enemies";
import { useSelectedCharacter } from "./SelectedCharacter";

const BaseStatusContext = createContext();

export default function BaseStatusProvider({ children }) {
  const { selectedEnemy, selectedRole } = useSelectedCharacter();

  let baseRoleStatus;
  let baseEnemyStatus;

  allRoles.includes(selectedRole) === true
    ? (baseRoleStatus = roles[selectedRole].baseStatus)
    : (baseRoleStatus = "");

  allEnemies.includes(selectedEnemy) === true
    ? (baseEnemyStatus = enemies[selectedEnemy].baseStatus)
    : (baseEnemyStatus = "");

  return (
    <BaseStatusContext.Provider
      value={{
        baseRoleStatus,
        baseEnemyStatus,
      }}
    >
      {children}
    </BaseStatusContext.Provider>
  );
}

export const useBaseStatus = () => {
  const context = useContext(BaseStatusContext);

  return context;
};
