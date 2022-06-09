import React from "react";
import Result from "./Result.jsx";

function Race() {

    function aa () {
        return (
            <Result
            race={race}
            coin={coin}
            setCoin={setCoin}
            drivers={drivers}
            setDrivers={setDrivers}
            P1_bet={P1_bet}
            P2_bet={P2_bet}
            P3_bet={P3_bet}
            P4_bet={P4_bet}
          />
        )
    }

    return (
        <div>
            <button></button>


        </div>
    )
}

export default Race