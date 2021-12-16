import { useEffect } from "react";

import { usePlayerCoins } from "../contexts/PlayerCoins";
import { useEnemyStatus } from "../contexts/EnemyStatus";

import coins from "../assets/images/coins.png";

import "./PlayerCoins.css";

export const PlayerCoins = (props) => {
  const { playerCoins, setPlayerCoins } = usePlayerCoins();
  const { isDead } = useEnemyStatus();

  useEffect(() => {
    if (isDead === true) setPlayerCoins(parseInt(playerCoins) + 2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDead]);

  useEffect(() => {
    sessionStorage.setItem("playerCoins", playerCoins);
  }, [playerCoins]);
  return (
    <div
      style={{ marginBottom: props.marginBottom }}
      className="wrapper-player-coins"
    >
      <img className="image-coins" src={coins} alt="player coins" />
      <span className="span-player-coins">
        {playerCoins} {playerCoins === 0 ? "moeda" : "moedas"}
      </span>
    </div>
  );
};
