import { useState } from "react";

import { PlayerCoins } from "./components/PlayerCoins";
import { Background } from "./components/Background";
import { DamageSpan } from "./components/DamageSpan";
import { Profile } from "./components/Profile";
import { Button } from "./components/Button";

import SelectedCharacterProvider from "./contexts/SelectedCharacter";
import EnemyHitPointsProvider from "./contexts/EnemyHitPoints";

function App() {
  return (
    <SelectedCharacterProvider>
      <EnemyHitPointsProvider>
        <Background>
          <div style={{ margin: "0 auto", maxWidth: "400px" }}>
            <PlayerCoins marginBottom={"10px"} />
            <Profile isEnemy={false} />

            <Button margin={"10px 0"}>Atacar</Button>

            <Profile isEnemy={true} />

            <DamageSpan />
          </div>
        </Background>
      </EnemyHitPointsProvider>
    </SelectedCharacterProvider>
  );
}

export default App;
