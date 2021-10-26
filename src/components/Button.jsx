import { useState } from "react";

import { useSelectedCharacter } from "../contexts/SelectedCharacter";
import { useEnemyHitPoints } from "../contexts/EnemyHitPoints";

import { enemies } from "../characters/enemies";

import "./Button.css";
import { roles } from "../characters/roles";

export const Button = ({ children, attack, ...props }) => {
  const { selectedEnemy, selectedRole } = useSelectedCharacter();
  const { enemyHitPoints, setEnemyHitPoints } = useEnemyHitPoints();

  const [spanDamage, setSpanDamage] = useState(false);
  const [critical, setCritical] = useState(false);

  function getIntervalDamage(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function persistEnemies() {
    sessionStorage.setItem(
      selectedEnemy,
      JSON.stringify(enemies[selectedEnemy].baseStatus)
    );
  }

  function attack() {
    const rawDamage = roles[selectedRole].baseStatus.baseAttack;

    const minHitDamage = Math.round(rawDamage * 0.8);
    const maxHitDamage = Math.round(rawDamage * 1.2);
    const intervalDamage = getIntervalDamage(minHitDamage, maxHitDamage);

    const criticalHitChance = parseInt(Math.random() * 100 + 1);

    const baseCriticalHitChance = 1;
    const weaponCriticalHitChance = 89;
    const criticalDamage = 3;

    const multiplier = baseCriticalHitChance + weaponCriticalHitChance;

    const rawFinalDamage =
      criticalHitChance <= multiplier
        ? intervalDamage * criticalDamage
        : intervalDamage;

    // if (criticalHitChance <= multiplier) {
    //   setCritical(true);
    // } else {
    //   setCritical(false);
    // }

    console.log("Dano final sem defesa: ", rawFinalDamage);

    let finalDamage =
      rawFinalDamage - enemies[selectedEnemy].baseStatus.baseDefense;

    console.log("Dano final com defesa: ", finalDamage);

    if (finalDamage <= 0) finalDamage = 0;

    // setSpanDamage(finalDamage);

    return finalDamage;
  }
  return (
    <button
      style={{ margin: props.margin }}
      onClick={() =>
        setEnemyHitPoints(
          selectedEnemy && selectedRole !== "" ? enemyHitPoints - attack() : ""
        )
      }
      className="attack-button"
    >
      {children}
    </button>
  );
};
