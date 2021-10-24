import "./Avatar.css";

import { roles } from "../characters/roles";
import { enemies } from "../characters/enemies";

export const Avatar = ({ selectedRole, selectedEnemy, ...props }) => {
  let avatarSrc;
  let avatarAlt;

  if (props.isEnemy === true ? selectedEnemy : selectedRole) {
    if (props.isEnemy === true) {
      avatarSrc = enemies[selectedEnemy].avatar;
      avatarAlt = selectedEnemy;
    } else {
      avatarSrc = roles[selectedRole].avatar;
      avatarAlt = selectedRole;
    }
  }

  return <img className="role-avatar" src={avatarSrc} alt={avatarAlt} />;
};
