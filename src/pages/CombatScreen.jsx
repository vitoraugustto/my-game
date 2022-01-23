import Button from "../components/ui/Button";
import Background from "../components/layout/Background";
import { DamageDealt } from "../components/combat/DamageDealt";
import { PlayerCoins } from "../components/PlayerCoins";
import { Profile } from "../components/Profile";
import { Utilities } from "../components/combat/Utilities";
import GlobalStyle from "../theme/globalStyle";

export default function CombatScreen() {
  return (
    <Background>
      <GlobalStyle />
      <div style={{ margin: "0 auto", maxWidth: "400px" }}>
        <PlayerCoins />
        <Utilities />
        <Profile />

        <Button margin={"10px 0"}>Atacar</Button>

        <Profile isEnemy />
        <DamageDealt />
      </div>
    </Background>
  );
}
