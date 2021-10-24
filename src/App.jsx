import { useState } from "react";

import { PlayerCoins } from "./components/PlayerCoins";
import { Background } from "./components/Background";
import { DamageSpan } from "./components/DamageSpan";
import { Profile } from "./components/Profile";
import { Button } from "./components/Button";

import SelectedCharacterProvider from "./contexts/SelectedCharacter";
import BaseStatusProvider from "./contexts/BaseStatus";

function App() {
  const [spanDamage, setSpanDamage] = useState(false);
  const [critical, setCritical] = useState(false);

  // function getIntervalDamage(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // }

  // function persistEnemies() {
  //   sessionStorage.setItem(
  //     selectedEnemy,
  //     JSON.stringify(enemies[selectedEnemy].baseStatus)
  //   );
  // }

  // function attack() {
  //   const rawDamage = baseRoleStatus.baseAttack;

  //   const minHitDamage = Math.round(rawDamage * 0.8);
  //   const maxHitDamage = Math.round(rawDamage * 1.2);
  //   const intervalDamage = getIntervalDamage(minHitDamage, maxHitDamage);

  //   const criticalHitChance = parseInt(Math.random() * 100 + 1); // random between 1 and 100

  //   const baseCriticalHitChance = 1; // wont be a static value after
  //   const weaponCriticalHitChance = 29; // wont be a static value after
  //   const criticalDamage = 3; // wont be a static value after

  //   const multiplier = baseCriticalHitChance + weaponCriticalHitChance;

  //   const rawFinalDamage =
  //     criticalHitChance <= multiplier
  //       ? intervalDamage * criticalDamage
  //       : intervalDamage;

  //   if (criticalHitChance <= multiplier) {
  //     setCritical(true);
  //   } else {
  //     setCritical(false);
  //   }

  //   console.log("Dano final sem defesa: ", rawFinalDamage);

  //   let finalDamage = rawFinalDamage - baseEnemyStatus.baseDefense;

  //   console.log("Dano final com defesa: ", finalDamage);

  //   if (finalDamage <= 0) finalDamage = 0;

  //   baseEnemyStatus.baseHitPoints -= finalDamage;
  //   setSpanDamage(finalDamage);

  //   persistEnemies();
  // }

  return (
    <SelectedCharacterProvider>
      <BaseStatusProvider>
        <Background>
          <div style={{ margin: "0 auto", maxWidth: "400px" }}>
            <PlayerCoins marginBottom={"10px"} />
            <Profile isEnemy={false} />

            {/* <Button margin={"10px 0"} attack={attack}>
            Atacar
          </Button> */}

            <Profile isEnemy={true} />

            {spanDamage === false ? (
              ""
            ) : (
              <DamageSpan spanDamage={spanDamage} critical={critical} />
            )}
          </div>
        </Background>
      </BaseStatusProvider>
    </SelectedCharacterProvider>
  );
}

export default App;
