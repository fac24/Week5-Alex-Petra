import React from "react";
// import Bet from "./Bet";

function TotalRandom(props) {
    // const [race, setRace] =  React.useState(null)

    function randomRace() {

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
            <button type="submit" onClick={randomRace}>Pick a race for me!</button>
            <p>{props.race == null ? "loading..." : props.race["MRData"]["RaceTable"]["Races"][0].season}</p>
        </div>
    )
}

export default TotalRandom
