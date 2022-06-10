import React from "react";
// import Bet from "./Bet";

function TotalRandom(props) {
    const [isPickRaceButtonShown, setIsPickRaceButtonShown] = React.useState(true)

    function randomRace() {
        setIsPickRaceButtonShown(false)
        props.setIsGoButtonShown(true)
        const firstYear = 1950;
        const currentYear = new Date().getFullYear();
        const randomYear = Math.floor(Math.random() * (currentYear - firstYear + 1) + firstYear)

        return fetch(`https://ergast.com/api/f1/${randomYear}.json`)
            .then((response) => {
                if (!response.ok) {
                    const error = new Error(response.status);
                    throw error;
                }
                else {
                    return response.json();
                }
            })
            .then((data) => {
                let racesLength = data["MRData"]["RaceTable"]["Races"].length;
                return Math.floor(Math.random() * (racesLength))
            })
            .then((round) => {
                return fetch(`https://ergast.com/api/f1/${randomYear}/${round}/results.json`)
                    .then((response) => {
                        if (!response.ok) {
                            const error = new Error(response.status);
                            throw error;
                        }
                        else {
                            return response.json();
                        }
                    })
                    .then((data) => {
                        console.log(data);
                        return data;
                    })
            }).then((data) => props.setRace(data))

    }

    return (
        <div>
            {isPickRaceButtonShown && <button type="submit" onClick={randomRace}>Pick a race for me!</button>}
            <div id="season-display">
            <p id="year">{props.race == null ? "Season: ?" : "Season: " + props.race["MRData"]["RaceTable"]["Races"][0].season}</p>
            </div>
        </div>
    )
}

export default TotalRandom
