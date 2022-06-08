function randomRace() {
    const firstYear = 1950;
    const currentYear = new Date().getFullYear();
    const randomYear = Math.floor(Math.random() * (currentYear - firstYear + 1) + firstYear)

    console.log(randomYear)

    return fetch(`http://ergast.com/api/f1/${randomYear}.json`)
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
        })
}

function getDrivers() {
    randomRace().then((data) => {
        const raceInfo = data["MRData"]["RaceTable"]["Races"][0]
        console.log(raceInfo.season);
        console.log(raceInfo.raceName);
        // const {'a', 'b', 'c', 'd'} = raceInfo["Results"];
        // console.log(0)
        // .map((driver) => {
        //     console.log(driver["Constructor"]["name"]);
        //     console.log(driver["Driver"]["givenName"] + " " + driver["Driver"]["familyName"]);
        //     console.log(driver["position"]);
        //     console.log(driver["Time"]["millis"]);
        //     console.log(driver["Time"]["time"]);
        // })
    })
}

randomRace()
getDrivers()