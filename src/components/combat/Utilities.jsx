import PotionImg from "../../assets/images/potion.png";
import SkillImg from "../../assets/images/skill.png";
import Container from "../layout/Container";
import Image from "../ui/Image";
import Span from "../ui/Span";

function mouseOver(event) {
  event.target.style.transform = "scale(1.2)";
}

function mouseOut(event) {
  event.target.style.transform = "scale(1)";
}

export const Utilities = () => {
  return (
    <Container width={"52%"}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <div>
          <Image
            medium
            mouseOut={mouseOut}
            mouseOver={mouseOver}
            transition={"0.2s"}
            src={PotionImg}
            alt="potion"
          />
          <Span large>0</Span>
        </div>

        <div>
          <Image
            medium
            mouseOut={mouseOut}
            mouseOver={mouseOver}
            transition={"0.2s"}
            src={SkillImg}
            alt="skill"
          />
          <Span large>0</Span>
        </div>
      </div>
    </Container>
  );
};
