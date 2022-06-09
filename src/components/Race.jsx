import React from "react";
// import Result from "./Result.jsx";

function Race(props) {
    const [isShown, setIsShown] = React.useState(false);
    console.log(props);
    props.race !== null ? console.log(props.race["MRData"]["RaceTable"]["Races"][0]["raceName"]) : console.log("no prix");
    function showResults() {
        props.setCoin(props.coin + props.P1_bet * 2);
        setIsShown(true);

    }
    React.useEffect(() => {
        // storing input name
        localStorage.setItem("capital", JSON.stringify(props.coin));
    }, [props.coin]);
    return (
        <div>
            <button onClick={showResults}>Lights out and away we go!</button>
            {isShown && <div>
                <h2>{props.race !== null ? props.race["MRData"]["RaceTable"]["Races"][0]["raceName"] : ""}</h2>
                <h3>Results</h3>

                <div>{props.drivers.map((driver) =>
                    driver.position == '1' ? <p key={driver.position}>{driver.driverName} crossed the line and the chequered flag is for {driver.constructor}!</p> : <p key={driver.position}></p>
                )}</div>
                <div>{props.drivers.map((driver) =>
                    driver.position == '2' ? <p key={driver.position}>2nd place: {driver.driverName} in the {driver.constructor}</p> : <p key={driver.position}></p>
                )}</div>
                <div>{props.drivers.map((driver) =>
                    driver.position == '3' ? <p key={driver.position}>3rd place: {driver.driverName} in the {driver.constructor}</p> : <p key={driver.position}></p>
                )}</div>
                <div>{props.drivers.map((driver) =>
                    driver.position == '4' ? <p key={driver.position}>4th place: {driver.driverName} in the {driver.constructor}</p> : <p key={driver.position}></p>
                )}</div>
            </div>}
        </div>
    )
}

export default Race