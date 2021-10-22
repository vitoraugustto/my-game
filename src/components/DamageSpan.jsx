import "./DamageSpan.css";

export const DamageSpan = ({ spanDamage, critical }) => {
  function VerifyCrit() {
    if (critical === true) {
      return (
        <span className="damage-span-crit">
          Você desferiu <span>{spanDamage}</span> de dano crítico ao inimigo!
        </span>
      );
    } else {
      return (
        <span className="damage-span">
          Você desferiu <span>{spanDamage}</span> de dano ao inimigo!
        </span>
      );
    }
  }

  return <VerifyCrit />;
};
