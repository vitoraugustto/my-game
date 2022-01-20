import { useState, useContext, createContext, useEffect } from "react";

import { getIntervalDamage } from "../utils/functions";
import { roles } from "../characters/roles";
import { enemies } from "../characters/enemies";

import { useSelectedCharacter } from "./SelectedCharacter";
import { useEnemyStatus } from "./EnemyStatus";

const RoleStatusContext = createContext();

export default function RoleStatusProvider({ children }) {
  const { selectedRole, selectedEnemy } = useSelectedCharacter();
  const { enemyHitPoints, setEnemyHitPoints } = useEnemyStatus();

  const [roleHitPoints, setRoleHitPoints] = useState();
  const [roleManaPoints, setRoleManaPoints] = useState();
  const [roleAttack, setRoleAttack] = useState();
  const [roleDefense, setRoleDefense] = useState();
  const [finalDamage, setFinalDamage] = useState(null);
  const [critical, setCritical] = useState(false);
  const [countDamage, setCountDamage] = useState(0);

  useEffect(() => {
    setRoleHitPoints(roles[selectedRole].baseStatus.baseHitPoints);

    setRoleManaPoints(roles[selectedRole].baseStatus.baseManaPoints);

    setRoleAttack(roles[selectedRole].baseStatus.baseAttack);

    setRoleDefense(roles[selectedRole].baseStatus.baseDefense);
  }, [selectedRole]);

  const rawDamage = roles[selectedRole].baseStatus.baseAttack;
  const minHitDamage = Math.round(rawDamage * 0.8);
  const maxHitDamage = Math.round(rawDamage * 1.2);
  const baseCriticalHitChance = 1;
  const weaponCriticalHitChance = 19;
  const totalCriticalChance = baseCriticalHitChance + weaponCriticalHitChance;
  const criticalDamage = 3;

  useEffect(() => {
    setFinalDamage(null);
  }, [selectedRole, selectedEnemy]);

  function attack() {
    let intervalDamage = getIntervalDamage(minHitDamage, maxHitDamage);
    let criticalHitChance = parseInt(Math.random() * 100 + 1);
    let rawFinalDamage =
      criticalHitChance <= totalCriticalChance
        ? intervalDamage * criticalDamage
        : intervalDamage;

    criticalHitChance <= totalCriticalChance
      ? setCritical(true)
      : setCritical(false);

    let hitDamage =
      rawFinalDamage - enemies[selectedEnemy].baseStatus.baseDefense <= 0
        ? 0
        : rawFinalDamage - enemies[selectedEnemy].baseStatus.baseDefense;

    setFinalDamage(hitDamage);
    setCountDamage(countDamage + hitDamage);

    return setEnemyHitPoints(enemyHitPoints - hitDamage);
  }

  return (
    <RoleStatusContext.Provider
      value={{
        roleHitPoints,
        roleManaPoints,
        roleAttack,
        roleDefense,
        setRoleHitPoints,
        setRoleManaPoints,
        setRoleAttack,
        setRoleDefense,
        finalDamage,
        attack,
        critical,
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
