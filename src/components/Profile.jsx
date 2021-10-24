import { useSelectedCharacter } from "../contexts/SelectedCharacter";

import { Status } from "./Status";
import { Select } from "./Select";
import allEnemies from "../characters/enemies";
import allRoles from "../characters/roles";

import "./Profile.css";

export const Profile = (props) => {
  const { selectedRole, selectedEnemy } = useSelectedCharacter();

  let isEnemy = props.isEnemy;

  function VerifyEnemy() {
    if (isEnemy === true) {
      return (
        <div className="role-profile">
          <Select isEnemy={isEnemy} width={"100%"} defaultValue={selectedEnemy}>
            <option disabled value="">
              Selecione um monstro
            </option>
            {allEnemies.map((enemy) => (
              <option key={enemy} value={enemy}>
                {enemy[0].toUpperCase() + enemy.substring(1)}
              </option>
            ))}
          </Select>
          <Status isEnemy={isEnemy} />
        </div>
      );
    } else {
      return (
        <div className="role-profile">
          <Select isEnemy={isEnemy} width={"100%"} defaultValue={selectedRole}>
            <option disabled value="">
              Selecione uma classe
            </option>
            {allRoles.map((role) => (
              <option key={role} value={role}>
                {role[0].toUpperCase() + role.substring(1)}
              </option>
            ))}
          </Select>
          <Status isEnemy={isEnemy} />
        </div>
      );
    }
  }

  return <VerifyEnemy />;
};
