import { useRoleStatus } from "../../contexts/RoleStatus";
import Container from "../layout/Container";
import Span from "../ui/Span";

export const DamageDealt = () => {
  const { critical, finalDamage } = useRoleStatus();

  return finalDamage === null ? (
    ""
  ) : critical ? (
    <Container alignCenter>
      Você desferiu{" "}
      <Span large color={"red"}>
        {finalDamage}
      </Span>{" "}
      de dano crítico ao inimigo!
    </Container>
  ) : (
    <Container alignCenter>
      Você desferiu{" "}
      <Span large color={"lightgreen"}>
        {finalDamage}
      </Span>{" "}
      de dano ao inimigo!
    </Container>
  );
};
