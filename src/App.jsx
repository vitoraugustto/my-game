import { Background } from "./components/Background";

import SelectedCharacterProvider from "./contexts/SelectedCharacter";
import EnemyStatusProvider from "./contexts/EnemyStatus";
import { Combat } from "./components/Combat";
import RoleStatusProvider from "./contexts/RoleStatus";

function App() {
  return (
    <SelectedCharacterProvider>
      <RoleStatusProvider>
        <EnemyStatusProvider>
          <Background>
            <Combat />
          </Background>
        </EnemyStatusProvider>
      </RoleStatusProvider>
    </SelectedCharacterProvider>
  );
}

export default App;
