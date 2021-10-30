import { useState, useEffect } from "react";

import { useSelectedCharacter } from "../contexts/SelectedCharacter";

import { getIntervalDamage } from "../utils/functions";

import { enemies } from "../characters/enemies";
import { roles } from "../characters/roles";

import { persistEnemy } from "../utils/functions";
import { AttackButton } from "./AttackButton";
import { PlayerCoins } from "./PlayerCoins";
import { DamageSpan } from "./DamageSpan";
import { Profile } from "./Profile";

export const Combat = () => {
  const { selectedEnemy, selectedRole } = useSelectedCharacter();
  // const [critical, setCritical] = useState();

  function attack() {
    const rawDamage = roles[selectedRole].baseStatus.baseAttack;
    const minHitDamage = Math.round(rawDamage * 0.8);
    const maxHitDamage = Math.round(rawDamage * 1.2);
    const intervalDamage = getIntervalDamage(minHitDamage, maxHitDamage);
    const criticalHitChance = parseInt(Math.random() * 100 + 1);
    const baseCriticalHitChance = 1;
    const weaponCriticalHitChance = 19;
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

    let finalDamage =
      rawFinalDamage - enemies[selectedEnemy].baseStatus.baseDefense;

    if (finalDamage <= 0) finalDamage = 0;

    if (criticalHitChance <= multiplier) {
      console.log(`Desferiu ${finalDamage} de dano crítico ao inimigo`);
    } else {
      console.log(`Desferiu ${finalDamage} de dano ao inimigo`);
    }

    return finalDamage;
  }

  return (
    <div style={{ margin: "0 auto", maxWidth: "400px" }}>
      <PlayerCoins marginBottom={"10px"} />
      <Profile isEnemy={false} />

      <AttackButton attack={attack} margin={"10px 0"}>
        Atacar
      </AttackButton>

      <Profile isEnemy={true} />

      {/* <DamageSpan /> */}
    </div>
  );
};
