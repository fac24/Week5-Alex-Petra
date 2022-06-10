import React from "react";
// import TotalRandom from "./TotalRandom";


function Bet(props) {


    // const {race, drivers, setDrivers} = props;

    React.useEffect(() => {
        if (props.race) {
            const raceInfo = props.race["MRData"]["RaceTable"]["Races"][0]
            const [P1, P2, P3, P4] = raceInfo["Results"];
            const driversInfo = [P1, P2, P3, P4].map((driver, index) => {

                let driverObject = {
                    id: index,
                    constructor: driver["Constructor"]["name"],
                    driverName: `${driver["Driver"]["givenName"]} ${driver["Driver"]["familyName"]}`,
                    position: driver["position"],
                    // timeMillis: (driver["Time"]["millis"] == undefined ? 'unknown' : driver["Time"]["millis"])
                    // time: driver["Time"]["time"]
                };

                return driverObject;
            })
            let shuffled = driversInfo
                .map(value => ({ value, sort: Math.random() }))
                .sort((a, b) => a.sort - b.sort)
                .map(({ value }) => value)
            props.setDrivers(shuffled);
        }
    }, [props.race]);



    function decrement(event) {
        props.setCoin(props.coin - 20);
        let position = parseInt(event.target.dataset.position);
        if (position == 1) {
            props.setP1_bet(props.P1_bet + 20);
        }
        else if (position == 2) {
            props.setP2_bet(props.P2_bet + 20);
        }
        else if (position == 3) {
            props.setP3_bet(props.P3_bet + 20);
        }
        else if (position == 4) {
            props.setP4_bet(props.P4_bet + 20);
        }

    }

    if (!props.drivers) return <div>Loading repos...</div>;

    return (
        <div id="lineup-container">
            <h2>Lineup</h2>
            <p>Place your bets!</p>
        <ul>
            {props.drivers.map((driver) => (
                <li key={driver.driverName} className="drivers">
                    <p>{driver.driverName == null ? "loading..." : driver.driverName}</p>
                    <label htmlFor={driver.driverName}></label>
                    <button id={driver.driverName} data-position={driver.position} onClick={decrement}>Bet 20</button>
                    <p></p>
                </li>
            ))}
        </ul>
        </div>
    );
}

{/* <input type="number" id={driver.drivername} min="0" max={props.coin} onChange={decrement}></input> */ }

export default Bet