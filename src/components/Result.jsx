import React from "react";

function Result(props) {
    if (!props.drivers) return <div>Loading results...</div>;
    return (
        <div>
            <h2>Results</h2>
            <div>{props.drivers.map((driver) =>
                driver.position == '1' ? <p key={driver.driverName + 'result'}>{driver.driverName} came first!</p> : <p></p>
            )}</div>
        </div>
    )
}

export default Result