import { Background } from "./components/Background";

import SelectedCharacterProvider from "./contexts/SelectedCharacter";
<<<<<<< HEAD
import EnemyStatusProvider from "./contexts/EnemyStatus";
=======
import EnemyHitPointsProvider from "./contexts/EnemyHitPoints";
>>>>>>> bf230d72c674b0f651bdb94590ea9cdedc5fc770
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
