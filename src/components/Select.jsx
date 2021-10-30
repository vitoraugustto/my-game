import { useSelectedCharacter } from "../contexts/SelectedCharacter";

import "./Select.css";

export const Select = ({ children, ...props }) => {
  const { handleRoleChange, handleEnemyChange } = useSelectedCharacter();

  return (
    <>
      <select
        style={{ width: props.width }}
        defaultValue={props.defaultValue}
        className="select"
        onChange={props.isEnemy === true ? handleEnemyChange : handleRoleChange}
      >
        {children}
      </select>
    </>
  );
};
