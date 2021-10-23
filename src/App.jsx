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
  const [spanDamage, setSpanDamage] = useState(false);
  const [critical, setCritical] = useState(false);

  function handleRoleChange(e) {
    setSelectedRole(e.target.value);
  }

  function handleEnemyChange(e) {
    setSelectedEnemy(e.target.value);
  }

  let baseRoleStatus;
  let baseEnemyStatus;

  function loopThroughEnemies() {
    let allEnemies = [];

    for (let enemy in enemies) {
      allEnemies.push(enemy);
    }

    allEnemies.includes(selectedEnemy) === true
      ? (baseEnemyStatus = enemies[selectedEnemy].baseStatus)
      : (baseEnemyStatus = "");
  }

  function loopThroughRoles() {
    let allRoles = [];

    for (let role in roles) {
      allRoles.push(role);
    }

    allRoles.includes(selectedRole) === true
      ? (baseRoleStatus = roles[selectedRole].baseStatus)
      : (baseRoleStatus = "");
  }

  loopThroughEnemies();
  loopThroughRoles();

  const [enemyHitPoints, setEnemyHitPoints] = useState(
    baseEnemyStatus.baseHitPoints
  );

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
    const rawDamage = baseRoleStatus.baseAttack;

    const minHitDamage = Math.round(rawDamage * 0.8);
    const maxHitDamage = Math.round(rawDamage * 1.2);
    const intervalDamage = getIntervalDamage(minHitDamage, maxHitDamage);

    const criticalHitChance = parseInt(Math.random() * 100 + 1); // random between 1 and 100

    const baseCriticalHitChance = 1; // wont be a static value after
    const weaponCriticalHitChance = 29; // wont be a static value after
    const criticalDamage = 3; // wont be a static value after

    const multiplier = baseCriticalHitChance + weaponCriticalHitChance;

    const rawFinalDamage =
      criticalHitChance <= multiplier
        ? intervalDamage * criticalDamage
        : intervalDamage;

    if (criticalHitChance <= multiplier) {
      setCritical(true);
    } else {
      setCritical(false);
    }

    console.log("Dano final sem defesa: ", rawFinalDamage);

    let finalDamage = rawFinalDamage - baseEnemyStatus.baseDefense;

    console.log("Dano final com defesa: ", finalDamage);

    if (finalDamage <= 0) finalDamage = 0;

    setEnemyHitPoints((baseEnemyStatus.baseHitPoints -= finalDamage));
    setSpanDamage(finalDamage);

    persistEnemies();
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

        <Button margin={"10px 0"} attack={attack}>
          Atacar
        </Button>

        <Profile
          isEnemy={true}
          selectedEnemy={selectedEnemy}
          baseEnemyStatus={baseEnemyStatus}
          handleEnemyChange={handleEnemyChange}
        />

        {spanDamage === false ? (
          ""
        ) : (
          <DamageSpan spanDamage={spanDamage} critical={critical} />
        )}
      </div>
    </Background>
  );
}

export default App;
