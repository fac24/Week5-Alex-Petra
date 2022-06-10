import React from "react";

function Positions(props) {
    function pos(position, ordinal) {
        return props.drivers.map((driver) => {
            if (position == 1) {
                return (driver.position == position ? <p key={driver.position}>{driver.driverName} crossed the line and the chequered flag is for {driver.constructor}!</p> : <p key={driver.position}></p>)
            } else {
                return (driver.position == position ? <p key={driver.position}>{ordinal} place: {driver.driverName} in the {driver.constructor}</p> : <p key={driver.position}></p>)
            }
        }
                   
    )}

    return(
        <div>
        <div>{pos(1)}</div>
        <div>{pos(2, "2nd")}</div>
        <div>{pos(3, "3rd")}</div>
        <div>{pos(4, "4th")}</div>
        </div>
    )
}

export default Positions