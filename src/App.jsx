import { Background } from "./components/Background";

import SelectedCharacterProvider from "./contexts/SelectedCharacter";
import EnemyStatusProvider from "./contexts/EnemyStatus";
import { DamageSpan } from "./components/DamageSpan";

import RoleStatusProvider from "./contexts/RoleStatus";
import PlayerCoinsProvider from "./contexts/PlayerCoins";
import { PlayerCoins } from "./components/PlayerCoins";
import { Profile } from "./components/Profile";
import { AttackButton } from "./components/AttackButton";
import { Utilities } from "./components/Utilities";

function App() {
  return (
    <PlayerCoinsProvider>
      <SelectedCharacterProvider>
        <EnemyStatusProvider>
          <RoleStatusProvider>
            <Background>
              <div style={{ margin: "0 auto", maxWidth: "400px" }}>
                <PlayerCoins marginBottom={"10px"} />
                <Utilities />
                <Profile isEnemy={false} />

                <AttackButton margin={"10px 0"}>Atacar</AttackButton>

                <Profile isEnemy={true} />
                <DamageSpan />
              </div>
            </Background>
          </RoleStatusProvider>
        </EnemyStatusProvider>
      </SelectedCharacterProvider>
    </PlayerCoinsProvider>
  );
}

export default App;
