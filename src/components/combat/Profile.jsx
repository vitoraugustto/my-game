import { useSelectedCharacter } from "../../contexts/SelectedCharacter";

import Row from "../layout/Row";
import Container from "../layout/Container";
import Select from "../ui/Select";

import { Avatar } from "./Avatar";
import { Status } from "./Status";

import allEnemies from "../../characters/enemies";
import allRoles from "../../characters/roles";

export const Profile = (props) => {
  const { selectedRole, selectedEnemy, handleEnemyChange, handleRoleChange } =
    useSelectedCharacter();

  return props.isEnemy ? (
    <Container>
      <Select
        onChange={handleEnemyChange}
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
      <Row padding={"10px 0"}>
        <Status isEnemy />
        <Avatar isEnemy />
      </Row>
    </Container>
  ) : (
    <Container>
      <Select
        onChange={handleRoleChange}
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
      <Row padding={"10px 0"}>
        <Status />
        <Avatar />
      </Row>
    </Container>
  );
};
