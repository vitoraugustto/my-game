import { useSelectedCharacter } from "../contexts/SelectedCharacter";

import { Status } from "./Status";
import Select from "./Select";
import allEnemies from "../characters/enemies";
import allRoles from "../characters/roles";

import "./Profile.css";

export const Profile = (props) => {
  const { selectedRole, selectedEnemy, handleEnemyChange, handleRoleChange } =
    useSelectedCharacter();

  let isEnemy = props.isEnemy;

  return isEnemy === true ? (
    <div className="role-profile">
      <Select
        onChange={handleEnemyChange}
        isEnemy={isEnemy}
        width={"100%"}
        defaultValue={selectedEnemy}
      >
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
  ) : (
    <div className="role-profile">
      <Select
        onChange={handleRoleChange}
        isEnemy={isEnemy}
        width={"100%"}
        defaultValue={selectedRole}
      >
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
};
