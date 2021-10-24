import warriorAvatar from "../assets/images/roles/warrior.png";
import mageAvatar from "../assets/images/roles/mage.png";
import archerAvatar from "../assets/images/roles/archer.png";
export const roles = {
  warrior: {
    avatar: warriorAvatar,
    baseStatus: {
      baseHitPoints: 25,
      baseManaPoints: 0,
      baseAttack: 3,
      baseDefense: 3,
    },
  },
  mage: {
    avatar: mageAvatar,
    baseStatus: {
      baseHitPoints: 10,
      baseManaPoints: 20,
      baseAttack: 6,
      baseDefense: 1,
    },
  },
  archer: {
    avatar: archerAvatar,
    baseStatus: {
      baseHitPoints: 20,
      baseManaPoints: 0,
      baseAttack: 5,
      baseDefense: 2,
    },
  },
};
