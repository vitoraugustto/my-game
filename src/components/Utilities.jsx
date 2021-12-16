import PotionImg from "../assets/images/potion.png";
import SkillImg from "../assets/images/skill.png";

import "./Utilities.css";

export const Utilities = () => {
  return (
    <div className="utilities-container">
      <div className="potion-container">
        <img src={PotionImg} alt="potion" />
        <span>0</span>
      </div>

      <div className="skill-container">
        <img src={SkillImg} alt="skill" />
        <span>0</span>
      </div>
    </div>
  );
};
