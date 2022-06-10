import React from "react";
import Positions from "./Positions";

// import Result from "./Result.jsx";

function Race(props) {
    const [isShown, setIsShown] = React.useState(false);
    
    console.log(props);
    props.race !== null ? console.log(props.race["MRData"]["RaceTable"]["Races"][0]["raceName"]) : console.log("no prix");
    function showResults() {
        props.setCoin(props.coin + props.P1_bet * 2);
        setIsShown(true);
        props.setIsGoButtonShown(false);
        props.setIsAllBetButtonShown(false)
    }

    function reset() {
        window.location.reload();
    }

    React.useEffect(() => {
        // storing input name
        localStorage.setItem("capital", JSON.stringify(props.coin));
    }, [props.coin]);
    return (
        <div>
            { props.isGoButtonShown && <button onClick={showResults}>Lights out and away we go!</button> }
            
            {isShown && <div>
                <h2>{props.race !== null ? props.race["MRData"]["RaceTable"]["Races"][0]["raceName"] : ""}</h2>
                <h3>Results</h3>
                <Positions drivers={props.drivers}/>
                <button onClick={reset}>Start a new race!</button>
            </div>}

        </div>
    )
}

export default Race