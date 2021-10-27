import { Background } from "./components/Background";

import SelectedCharacterProvider from "./contexts/SelectedCharacter";
import EnemyHitPointsProvider from "./contexts/EnemyHitPoints";
import { Combat } from "./components/Combat";

function App() {
  return (
    <SelectedCharacterProvider>
      <EnemyHitPointsProvider>
        <Background>
          <Combat />
        </Background>
      </EnemyHitPointsProvider>
    </SelectedCharacterProvider>
  );
}

export default App;
