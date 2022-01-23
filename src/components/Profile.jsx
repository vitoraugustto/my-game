import { useSelectedCharacter } from "../contexts/SelectedCharacter";

import Container from "./layout/Container";
import { Status } from "./Status";
import Select from "./ui/Select";

import allEnemies from "../characters/enemies";
import allRoles from "../characters/roles";
import { Avatar } from "./Avatar";

export const Profile = (props) => {
  const { selectedRole, selectedEnemy, handleEnemyChange, handleRoleChange } =
    useSelectedCharacter();

  let isEnemy = props.isEnemy;

  return isEnemy ? (
    <Container width={"400px"}>
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
      <Status isEnemy />
      {/* <Avatar isEnemy /> */}
    </Container>
  ) : (
    <Container width={"400px"}>
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
      <Status />
      {/* <Avatar /> */}
    </Container>
  );
};
