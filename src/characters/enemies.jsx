import goblinAvatar from "../assets/images/enemies/goblin.png";
import orcAvatar from "../assets/images/enemies/orc.png";
import slimeAvatar from "../assets/images/enemies/slime.png";

export const enemies = {
  goblin: {
    avatar: goblinAvatar,
    baseStatus: {
      baseHitPoints: 150,
      baseManaPoints: 0,
      baseAttack: 1,
      baseDefense: 3,
    },
  },
  orc: {
    avatar: orcAvatar,
    baseStatus: {
      baseHitPoints: 300,
      baseManaPoints: 0,
      baseAttack: 3,
      baseDefense: 6,
    },
  },
  slime: {
    avatar: slimeAvatar,
    baseStatus: {
      baseHitPoints: 80,
      baseManaPoints: 3,
      baseAttack: 1,
      baseDefense: 2,
    },
  },
};

export default Object.keys(enemies);
