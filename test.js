function randomRace() {
    const firstYear = 1950;
    const currentYear = new Date().getFullYear();
    const randomYear = Math.floor(Math.random() * (currentYear - firstYear + 1) + firstYear)

    console.log(randomYear)

    fetch(`http://ergast.com/api/f1/${randomYear}.json`)
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
        fetch(`https://ergast.com/api/f1/${randomYear}/${round}/results.json`)
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
            console.log(data)
        })
    })
}

randomRace()