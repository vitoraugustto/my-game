import { Status } from "./Status";
import { Select } from "./Select";

import "./Profile.css";

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
            <option value="goblin">Goblin</option>
            <option value="orc">Orc</option>
            <option value="slime">Slime</option>
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
            <option value="warrior">Guerreiro</option>
            <option value="mage">Mago</option>
            <option value="archer">Arqueiro</option>
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
