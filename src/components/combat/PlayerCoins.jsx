import { useEffect } from "react";

import Container from "../layout/Container";
import Row from "../layout/Row";
import Image from "../ui/Image";
import Span from "../ui/Span";

import { usePlayerCoins } from "../../contexts/PlayerCoins";
import { useEnemyStatus } from "../../contexts/EnemyStatus";

import coins from "../../assets/images/coins.png";
import { ORANGE_1 } from "../../theme/constants";

export const PlayerCoins = () => {
  const { playerCoins, setPlayerCoins } = usePlayerCoins();
  const { enemyHitPoints } = useEnemyStatus();

  useEffect(() => {
    if (enemyHitPoints === 0) setPlayerCoins(parseInt(playerCoins) + 1);
  }, [enemyHitPoints]);

  useEffect(() => {
    sessionStorage.setItem("playerCoins", playerCoins);
  }, [playerCoins]);

  return (
    <Container width={"52%"}>
      <Row>
        <Image small src={coins} alt="player coins" />
        <Span medium color={ORANGE_1}>
          {playerCoins} {playerCoins === 1 ? "moeda" : "moedas"}
        </Span>
      </Row>
    </Container>
  );
};
