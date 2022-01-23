import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SelectedCharacterProvider from "./contexts/SelectedCharacter";
import PlayerCoinsProvider from "./contexts/PlayerCoins";
import EnemyStatusProvider from "./contexts/EnemyStatus";
import RoleStatusProvider from "./contexts/RoleStatus";

import CombatScreen from "./pages/CombatScreen";
import Home from "./pages/Home";

function App() {
  return (
    <PlayerCoinsProvider>
      <SelectedCharacterProvider>
        <EnemyStatusProvider>
          <RoleStatusProvider>
            <Router>
              <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/my-game" element={<CombatScreen />} />
              </Routes>
            </Router>
          </RoleStatusProvider>
        </EnemyStatusProvider>
      </SelectedCharacterProvider>
    </PlayerCoinsProvider>
  );
}

export default App;
