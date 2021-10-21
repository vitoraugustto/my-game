import { useState } from "react";

import { Background } from "./components/Background";
import { Profile } from "./components/Profile";
import { Button } from "./components/Button";

import { DamageSpan } from "./components/DamageSpan";
import { enemies } from "./characters/enemies";
import { roles } from "./characters/roles";

function App() {
  const [selectedRole, setSelectedRole] = useState("");
  const [selectedEnemy, setSelectedEnemy] = useState("");
  const [spanDamage, setSpanDamage] = useState(undefined);

  function handleRoleChange(e) {
    setSelectedRole(e.target.value);
  }

  function handleEnemyChange(e) {
    setSelectedEnemy(e.target.value);
  }

  let baseRoleStatus;
  let baseEnemyStatus;

  switch (selectedRole) {
    case "warrior":
      baseRoleStatus = roles.warrior.baseStatus;
      break;
    case "mage":
      baseRoleStatus = roles.mage.baseStatus;
      break;
    case "archer":
      baseRoleStatus = roles.archer.baseStatus;
      break;
    default:
      baseRoleStatus = "";
  }

  switch (selectedEnemy) {
    case "goblin":
      baseEnemyStatus = enemies.goblin.baseStatus;
      break;
    case "orc":
      baseEnemyStatus = enemies.orc.baseStatus;
      break;
    case "slime":
      baseEnemyStatus = enemies.slime.baseStatus;
      break;
    default:
      baseEnemyStatus = "";
  }

  const [enemyHitPoints, setEnemyHitPoints] = useState(
    baseEnemyStatus.baseHitPoints
  );

  function getIntervalDamage(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function persistEnemies() {
    sessionStorage.setItem("goblin", JSON.stringify(enemies.goblin.baseStatus));
    sessionStorage.setItem("orc", JSON.stringify(enemies.orc.baseStatus));
    sessionStorage.setItem("slime", JSON.stringify(enemies.slime.baseStatus));
  }

  function attack() {
    const rawDamage = baseRoleStatus.baseAttack;

    const minHitDamage = Math.round(rawDamage * 0.8);
    const maxHitDamage = Math.round(rawDamage * 1.2);
    const intervalDamage = getIntervalDamage(minHitDamage, maxHitDamage);

    const criticalHitChance = parseInt(Math.random() * 100 + 1); // random between 1 and 100

    const baseCriticalHitChance = 1; // wont be a static value after
    const weaponCriticalHitChance = 49; // wont be a static value after
    const criticalDamage = 3;

    const multiplier = baseCriticalHitChance + weaponCriticalHitChance;
    persistEnemies();

    const rawFinalDamage =
      criticalHitChance <= multiplier
        ? intervalDamage * criticalDamage
        : intervalDamage;

    console.log("Dano final sem defesa: ", rawFinalDamage);

    let finalDamage = rawFinalDamage - baseEnemyStatus.baseDefense;

    console.log("Dano final com defesa: ", finalDamage);

    if (finalDamage <= 0) finalDamage = 0;

    setEnemyHitPoints((baseEnemyStatus.baseHitPoints -= finalDamage));
    setSpanDamage(finalDamage);
  }

  return (
    <Background>
      <div style={{ margin: "0 auto", maxWidth: "400px" }}>
        <Profile
          isEnemy={false}
          selectedRole={selectedRole}
          baseRoleStatus={baseRoleStatus}
          handleRoleChange={handleRoleChange}
        />

        <Button attack={attack}>Atacar</Button>

        <Profile
          isEnemy={true}
          selectedEnemy={selectedEnemy}
          baseEnemyStatus={baseEnemyStatus}
          handleEnemyChange={handleEnemyChange}
        />

        {spanDamage === undefined ? (
          ""
        ) : (
          <DamageSpan>
            Você desferiu <span>{spanDamage}</span> de dano ao inimigo!
          </DamageSpan>
        )}
      </div>
    </Background>
  );
}

export default App;
