import { useRoleStatus } from "../contexts/RoleStatus";
import "./DamageSpan.css";

export const DamageSpan = () => {
  const { critical, finalDamage } = useRoleStatus();

  function Span() {
    if (critical) {
      return (
        <span className="damage-span-crit">
          Você desferiu <span>{finalDamage}</span> de dano crítico ao inimigo!
        </span>
      );
    } else {
      return finalDamage === null ? (
        ""
      ) : (
        <span className="damage-span">
          Você desferiu <span>{finalDamage}</span> de dano ao inimigo!
        </span>
      );
    }
  }

  return <Span />;
};
