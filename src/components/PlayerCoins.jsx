import coins from "../assets/images/coins.png";

import "./PlayerCoins.css";

export const PlayerCoins = (props) => {
  return (
    <div
      style={{ marginBottom: props.marginBottom }}
      className="wrapper-player-coins"
    >
      <img className="image-coins" src={coins} alt="player coins" />
      <span className="span-player-coins">6.666 coins</span>
    </div>
  );
};
