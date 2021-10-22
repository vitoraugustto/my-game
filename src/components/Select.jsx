import "./Select.css";

export const Select = ({
  selectedRole,
  selectedEnemy,
  handleRoleChange,
  handleEnemyChange,
  children,
  ...props
}) => {
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
