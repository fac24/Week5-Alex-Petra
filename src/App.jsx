import React from "react";
import './App.css'
import TotalRandom from "./components/TotalRandom.jsx";
import Bet from "./components/Bet.jsx";
import Capital from "./components/Capital.jsx";
// import Result from "./components/Result.jsx";
import Race from "./components/Race.jsx";

function App() {
  const [race, setRace] = React.useState(null);
  const [coin, setCoin] = React.useState(() => {
    const saved = localStorage.getItem("capital");
    const initialValue = JSON.parse(saved);
    return initialValue || 100;
  });

  const [drivers, setDrivers] = React.useState();
  const [P1_bet, setP1_bet] = React.useState(0);
  const [P2_bet, setP2_bet] = React.useState(0);
  const [P3_bet, setP3_bet] = React.useState(0);
  const [P4_bet, setP4_bet] = React.useState(0);



  const [isGoButtonShown, setIsGoButtonShown] = React.useState(false);
  const [isAllBetButtonShown, setIsAllBetButtonShown] = React.useState(true);

  return (
    <div className="App">
      <header className="App-header">
        <div id="title">
        <h1>PAST 
          & 
          CURIOUS</h1>
          </div>
      </header>
      <main>
      <Capital coin={coin} />
        <TotalRandom race={race} setRace={setRace} isGoButtonShown={isGoButtonShown} setIsGoButtonShown={setIsGoButtonShown}/>
        {/* <RandomInYear /> */}
        
        <Bet
          race={race}
          coin={coin}
          setCoin={setCoin}
          drivers={drivers}
          setDrivers={setDrivers}
          P1_bet={P1_bet}
          setP1_bet={setP1_bet}
          P2_bet={P2_bet}
          setP2_bet={setP2_bet}
          P3_bet={P3_bet}
          setP3_bet={setP3_bet}
          P4_bet={P4_bet}
          setP4_bet={setP4_bet} 
          isAllBetButtonShown={isAllBetButtonShown}
            setIsAllBetButtonShown={setIsAllBetButtonShown}/>
        <section>
          <Race
            race={race}
            coin={coin}
            setCoin={setCoin}
            drivers={drivers}
            setDrivers={setDrivers}
            P1_bet={P1_bet}
            P2_bet={P2_bet}
            P3_bet={P3_bet}
            P4_bet={P4_bet} 
            isGoButtonShown={isGoButtonShown} 
            setIsGoButtonShown={setIsGoButtonShown}
            isAllBetButtonShown={isAllBetButtonShown}
            setIsAllBetButtonShown={setIsAllBetButtonShown}
          />
        </section>
      </main>
    </div>
  )
}

export default App
