import React from "react";
import TotalRandom from "./TotalRandom";

function Bet(props) {
    const [drivers, setDrivers] = React.useState();

    React.useEffect(() => {
                const raceInfo = props.race["MRData"]["RaceTable"]["Races"][0]
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
                setDrivers(driversInfo)
      }, [props.race]);

      if (!drivers) return <div>Loading repos...</div>;
        return (
            <ul>
            {drivers.map((driver) => (
             <li key={driver.driverName}>
                <p>{driver.driverName == null ? "loading..." : driver.driverName}</p>
            </li>
            ))}
        </ul>
  );
}

export default Bet