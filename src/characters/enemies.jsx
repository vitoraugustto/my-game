import { AVATAR_ENEMIES_PATH } from "../utils/constants";

export const enemies = {
  goblin: {
    avatar: AVATAR_ENEMIES_PATH + "goblin.png",
    baseStatus: {
      baseHitPoints: 6,
      baseManaPoints: 0,
      baseAttack: 1,
      baseDefense: 1,
    },
  },
  orc: {
    avatar: AVATAR_ENEMIES_PATH + "orc.png",
    baseStatus: {
      baseHitPoints: 20,
      baseManaPoints: 0,
      baseAttack: 3,
      baseDefense: 10,
    },
  },
  slime: {
    avatar: AVATAR_ENEMIES_PATH + "slime.png",
    baseStatus: {
      baseHitPoints: 200,
      baseManaPoints: 0,
      baseAttack: 1,
      baseDefense: 9,
    },
  },
};
