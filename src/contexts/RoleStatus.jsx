import { useState, useContext, createContext, useEffect } from "react";

import { roles } from "../characters/roles";

import { useSelectedRole } from "./SelectedRole";

const RoleStatusContext = createContext();

export default function RoleStatusProvider({ children }) {
  const { selectedRole } = useSelectedRole();

  const [roleHitPoints, setRoleHitPoints] = useState();
  const [roleManaPoints, setRoleManaPoints] = useState();
  const [roleAttack, setRoleAttack] = useState();
  const [roleDefense, setRoleDefense] = useState();

  useEffect(() => {
    setRoleHitPoints(
      sessionStorage.getItem(selectedRole) === null
        ? roles[selectedRole].baseStatus.baseHitPoints
        : JSON.parse(sessionStorage.getItem(selectedRole)).hitPoints
    );

    setRoleManaPoints(roles[selectedRole].baseStatus.baseManaPoints);

    setRoleAttack(roles[selectedRole].baseStatus.baseAttack);

    setRoleDefense(roles[selectedRole].baseStatus.baseDefense);
  }, [selectedRole]);

  return (
    <RoleStatusContext.Provider
      value={{
        roleHitPoints,
        setRoleHitPoints,
        roleManaPoints,
        setRoleManaPoints,
        roleAttack,
        setRoleAttack,
        roleDefense,
        setRoleDefense,
      }}
    >
      {children}
    </RoleStatusContext.Provider>
  );
}

export const useRoleStatus = () => {
  const context = useContext(RoleStatusContext);

  return context;
};
