import "./Button.css";

export const Button = ({ children, attack, ...props }) => {
  return (
    <button
      style={{ margin: props.margin }}
      onClick={attack}
      className="attack-button"
    >
      {children}
    </button>
  );
};
