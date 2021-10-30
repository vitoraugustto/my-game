import "./DamageSpan.css";

export const DamageSpan = ({ critical }) => {
  function Span() {
    if (critical === true) {
      return (
        <span className="damage-span-crit">
          Você desferiu <span>0</span> de dano crítico ao inimigo!
        </span>
      );
    } else {
      return (
        <span className="damage-span">
          Você desferiu <span>0</span> de dano ao inimigo!
        </span>
      );
    }
  }

  return <Span />;
};
