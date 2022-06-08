function randomRace() {
    const firstYear = 1950;
    const currentYear = new Date().getFullYear();
    const randomYear = Math.floor(Math.random() * (currentYear - firstYear + 1) + firstYear)

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


        const [P1, P2, P3, P4] = raceInfo["Results"];
    
        const driversInfo = [P1, P2, P3, P4].map((driver) => {
            let driverObject = {
                constructor: driver["Constructor"]["name"],
                driverName: `${driver["Driver"]["givenName"]} ${driver["Driver"]["familyName"]}`,
                position: driver["position"],
                timeMillis: driver["Time"]["millis"],
                time: driver["Time"]["time"]
            };

            return driverObject;
        })

        console.log(driversInfo);
        return driversInfo;
    })
}

randomRace()
getDrivers()