import React from "react";
import logo from './logo.svg'
import './App.css'
import TotalRandom from "./components/TotalRandom";
import Bet from "./components/Bet";

function App() {
  const [race, setRace] =  React.useState(null)
  const [coin, setCoin] = React.useState(100)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Past & Curious</h1>
      </header>
      <main>
          <TotalRandom race={race} setRace={setRace} />
           {/* <RandomInYear /> */}
        <form>
          <Bet race={race} coin={coin} setCoin={setCoin}/>
        </form>
       {/* <section>
          <Race /> {/* button that starts the race, animation 
          <Result />
        </section> */}
      </main>
    </div>
  )
}

export default App
