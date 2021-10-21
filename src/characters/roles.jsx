import { AVATAR_ROLES_PATH } from "../utils/constants";

export const roles = {
  warrior: {
    avatar: AVATAR_ROLES_PATH + "warrior.png",
    baseStatus: {
      baseHitPoints: 25,
      baseManaPoints: 0,
      baseAttack: 3,
      baseDefense: 3,
    },
  },
  mage: {
    avatar: AVATAR_ROLES_PATH + "mage.png",
    baseStatus: {
      baseHitPoints: 10,
      baseManaPoints: 20,
      baseAttack: 6,
      baseDefense: 1,
    },
  },
  archer: {
    avatar: AVATAR_ROLES_PATH + "archer.png",
    baseStatus: {
      baseHitPoints: 20,
      baseManaPoints: 0,
      baseAttack: 5,
      baseDefense: 2,
    },
  },
};
