import { createContext, useState, useContext } from "react";

const SelectedCharacterContext = createContext();

export default function SelectedCharacterProvider({ children }) {
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedEnemy, setSelectedEnemy] = useState("");

  function handleRoleChange(e) {
    setSelectedRole(e.target.value);
  }

  function handleEnemyChange(e) {
    setSelectedEnemy(e.target.value);
  }

  return (
    <SelectedCharacterContext.Provider
      value={{
        selectedRole,
        selectedEnemy,
        handleRoleChange,
        handleEnemyChange,
      }}
    >
      {children}
    </SelectedCharacterContext.Provider>
  );
}

export const useSelectedCharacter = () => {
  const context = useContext(SelectedCharacterContext);

  return context;
};
