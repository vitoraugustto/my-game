import goblinAvatar from "../assets/images/enemies/goblin.png";
import slimeAvatar from "../assets/images/enemies/slime.png";
import orcAvatar from "../assets/images/enemies/orc.png";
import warriorAvatar from "../assets/images/roles/warrior.png";
import archerAvatar from "../assets/images/roles/archer.png";
import mageAvatar from "../assets/images/roles/mage.png";

import "./Avatar.css";

export const Avatar = ({ selectedRole, selectedEnemy }) => {
  let avatarSrc;
  let avatarAlt;

  let avatarEnemySrc;
  let avatarEnemyAlt;

  switch (selectedRole) {
    case "warrior":
      avatarSrc = warriorAvatar;
      avatarAlt = "A warrior sword and shield";
      break;
    case "mage":
      avatarSrc = mageAvatar;
      avatarAlt = "A mage staff";
      break;
    case "archer":
      avatarSrc = archerAvatar;
      avatarAlt = "An archer bow";
      break;
    default:
      avatarSrc = "";
      avatarAlt = "";
  }

  switch (selectedEnemy) {
    case "goblin":
      avatarEnemySrc = goblinAvatar;
      avatarEnemyAlt = "A goblin";
      break;
    case "orc":
      avatarEnemySrc = orcAvatar;
      avatarEnemyAlt = "An orc";
      break;
    case "slime":
      avatarEnemySrc = slimeAvatar;
      avatarEnemyAlt = "A slime";
      break;
    default:
      avatarEnemySrc = "";
      avatarEnemyAlt = "";
  }

  return (
    <img
      className="role-avatar"
      src={avatarSrc || avatarEnemySrc}
      alt={avatarAlt || avatarEnemyAlt}
    />
  );
};
