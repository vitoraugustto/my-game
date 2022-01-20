import { useRoleStatus } from "../contexts/RoleStatus";
import "./DamageSpan.css";

export const DamageSpan = () => {
  const { critical, finalDamage } = useRoleStatus();

  return finalDamage === null ? (
    ""
  ) : critical ? (
    <span className="damage-span-crit">
      Você desferiu <span>{finalDamage}</span> de dano crítico ao inimigo!
    </span>
  ) : (
    <span className="damage-span">
      Você desferiu <span>{finalDamage}</span> de dano ao inimigo!
    </span>
  );
};
