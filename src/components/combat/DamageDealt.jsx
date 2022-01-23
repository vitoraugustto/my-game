import { useRoleStatus } from "../../contexts/RoleStatus";
import { GREEN_1, RED_1 } from "../../theme/constants";
import Container from "../layout/Container";
import Span from "../ui/Span";

export const DamageDealt = () => {
  const { critical, finalDamage } = useRoleStatus();

  return finalDamage === null ? (
    ""
  ) : critical ? (
    <Container alignCenter>
      <Span>
        Você desferiu{" "}
        <Span large color={RED_1}>
          {finalDamage}
        </Span>{" "}
        de dano crítico ao inimigo!
      </Span>
    </Container>
  ) : (
    <Container alignCenter>
      <Span>
        Você desferiu{" "}
        <Span large color={GREEN_1}>
          {finalDamage}
        </Span>{" "}
        de dano ao inimigo!
      </Span>
    </Container>
  );
};
