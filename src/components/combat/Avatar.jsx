import { useSelectedCharacter } from "../../contexts/SelectedCharacter";

import Image from "../ui/Image";

import { roles } from "../../characters/roles";
import { enemies } from "../../characters/enemies";

export const Avatar = ({ isEnemy = false }) => {
  const { selectedRole, selectedEnemy } = useSelectedCharacter();
  let avatarSrc;
  let avatarAlt;

  if (isEnemy ? selectedEnemy : selectedRole) {
    if (isEnemy) {
      avatarSrc = enemies[selectedEnemy].avatar;
      avatarAlt = selectedEnemy;
    } else {
      avatarSrc = roles[selectedRole].avatar;
      avatarAlt = selectedRole;
    }
  }

  return <Image large src={avatarSrc} alt={avatarAlt} />;
};
