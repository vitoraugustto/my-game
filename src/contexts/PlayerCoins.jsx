import { createContext, useContext, useState } from "react";

const PlayerCoinsContext = createContext();

export default function PlayerCoinsProvider({ children }) {
  const [playerCoins, setPlayerCoins] = useState(
    sessionStorage.getItem("playerCoins") === null
      ? 0
      : sessionStorage.getItem("playerCoins")
  );

  return (
    <PlayerCoinsContext.Provider value={{ playerCoins, setPlayerCoins }}>
      {children}
    </PlayerCoinsContext.Provider>
  );
}

export const usePlayerCoins = () => {
  const context = useContext(PlayerCoinsContext);

  return context;
};
