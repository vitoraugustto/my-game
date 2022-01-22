import Button from "../components/Button";
import Select from "../components/Select";
import Background from "../components/Background";

import { DamageSpan } from "../components/DamageSpan";
import { PlayerCoins } from "../components/PlayerCoins";
import { Profile } from "../components/Profile";
import { Utilities } from "../components/Utilities";
import GlobalStyle from "../theme/globalStyle";

const CombatScreen = () => {
  return (
    <Background>
      <GlobalStyle />
      <div style={{ margin: "0 auto", maxWidth: "400px" }}>
        <PlayerCoins marginBottom={"10px"} />
        <Utilities />
        <Profile />

        <Button margin={"10px 0"}>Atacar</Button>

        <Profile isEnemy />
        <DamageSpan />
      </div>
    </Background>
  );
};

export default CombatScreen;
