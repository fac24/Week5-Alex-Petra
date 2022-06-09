import React from "react";

function Result(props) {
    console.log(props.drivers)
    if (!props.drivers) return <div>Loading results...</div>;
    return (
        <div>
            <h2>Results</h2>
            <div>{props.drivers.map((driver) =>
                driver.position == '1' ? <p key={driver.position}>{driver.driverName} came first!</p> : <p key={driver.position}></p>
            )}</div>
        </div>
    )
}

export default Result