import { Background } from "./components/Background";

import SelectedCharacterProvider from "./contexts/SelectedCharacter";
import EnemyStatusProvider from "./contexts/EnemyStatus";
import { Combat } from "./components/Combat";
import RoleStatusProvider from "./contexts/RoleStatus";
import PlayerCoinsProvider from "./contexts/PlayerCoins";

function App() {
  return (
    <PlayerCoinsProvider>
      <SelectedCharacterProvider>
        <RoleStatusProvider>
          <EnemyStatusProvider>
            <Background>
              <Combat />
            </Background>
          </EnemyStatusProvider>
        </RoleStatusProvider>
      </SelectedCharacterProvider>
    </PlayerCoinsProvider>
  );
}

export default App;
