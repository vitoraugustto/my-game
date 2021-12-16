import { useRoleStatus } from "../contexts/RoleStatus";

import "./AttackButton.css";

export const AttackButton = ({ children, ...props }) => {
  const { attack } = useRoleStatus();

  return (
    <button
      onClick={() => attack()}
      style={{ margin: props.margin }}
      className="attack-button"
    >
      {children}
    </button>
  );
};
