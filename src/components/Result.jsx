import React from "react";

function Result(props) {
    console.log(props.drivers)
    if (!props.drivers) return <div>Loading results...</div>;
    return (
        <div>
            <h2>Results</h2>
            <div>{props.drivers.map((driver) =>
<<<<<<< HEAD
                driver.position == '1' ? <p key={driver.driverName + 'result'}>{driver.driverName} came first!</p> : <p></p>
=======
                driver.position == '1' ? <p key={driver.position}>{driver.driverName} came first!</p> : <p key={driver.position}></p>
>>>>>>> f8c3855210a8c8f1020e319d5d03fe759ca437b7
            )}</div>
        </div>
    )
}

export default Result