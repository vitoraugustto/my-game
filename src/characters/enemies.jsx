import goblinAvatar from "../assets/images/enemies/goblin.png";
import orcAvatar from "../assets/images/enemies/orc.png";
import slimeAvatar from "../assets/images/enemies/slime.png";

export const enemies = {
  goblin: {
    avatar: goblinAvatar,
    baseStatus: {
      baseHitPoints: 6,
      baseManaPoints: 0,
      baseAttack: 1,
      baseDefense: 1,
    },
  },
  orc: {
    avatar: orcAvatar,
    baseStatus: {
      baseHitPoints: 20,
      baseManaPoints: 0,
      baseAttack: 3,
      baseDefense: 10,
    },
  },
  slime: {
    avatar: slimeAvatar,
    baseStatus: {
      baseHitPoints: 200,
      baseManaPoints: 0,
      baseAttack: 1,
      baseDefense: 9,
    },
  },
};
