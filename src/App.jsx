import { Background } from "./components/Background";

import SelectedCharacterProvider from "./contexts/SelectedCharacter";
import EnemyStatusProvider from "./contexts/EnemyStatus";
import { Combat } from "./components/Combat";

function App() {
  return (
    <SelectedCharacterProvider>
      <EnemyStatusProvider>
        <Background>
          <Combat />
        </Background>
      </EnemyStatusProvider>
    </SelectedCharacterProvider>
  );
}

export default App;
