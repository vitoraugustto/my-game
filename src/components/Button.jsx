import "./Button.css";

export const Button = ({ children, attack }) => {
  return (
    <button onClick={attack} className="attack-button">
      {children}
    </button>
  );
};
