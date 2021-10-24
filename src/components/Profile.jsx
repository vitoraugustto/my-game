import React from "react";

import { Status } from "./Status";
import { Select } from "./Select";

import "./Profile.css";
import { enemies } from "../characters/enemies";
import { roles } from "../characters/roles";

export const Profile = ({
  selectedRole,
  baseRoleStatus,
  handleRoleChange,
  selectedEnemy,
  baseEnemyStatus,
  handleEnemyChange,
  ...props
}) => {
  let isEnemy = props.isEnemy;
  let allEnemies = [];
  let allRoles = [];

  for (let enemy in enemies) {
    allEnemies.push(enemy);
  }

  for (let role in roles) {
    allRoles.push(role);
  }

  function VerifyEnemy() {
    if (isEnemy === true) {
      return (
        <div className="role-profile">
          <Select
            isEnemy={isEnemy}
            width={"100%"}
            defaultValue={selectedEnemy}
            handleEnemyChange={handleEnemyChange}
          >
            <option disabled value="">
              Selecione um monstro
            </option>
            {allEnemies.map((enemy) => (
              <option value={enemy}>
                {enemy[0].toUpperCase() + enemy.substring(1)}
              </option>
            ))}
          </Select>
          <Status
            isEnemy={isEnemy}
            selectedEnemy={selectedEnemy}
            baseEnemyStatus={baseEnemyStatus}
          />
        </div>
      );
    } else {
      return (
        <div className="role-profile">
          <Select
            isEnemy={isEnemy}
            width={"100%"}
            defaultValue={selectedRole}
            handleRoleChange={handleRoleChange}
          >
            <option disabled value="">
              Selecione uma classe
            </option>
            {allRoles.map((role) => (
              <option value={role}>
                {role[0].toUpperCase() + role.substring(1)}
              </option>
            ))}
          </Select>
          <Status
            isEnemy={isEnemy}
            selectedRole={selectedRole}
            baseRoleStatus={baseRoleStatus}
          />
        </div>
      );
    }
  }

  return <VerifyEnemy />;
};
