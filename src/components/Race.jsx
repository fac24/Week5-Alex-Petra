import React from "react";
// import Result from "./Result.jsx";

function Race(props) {
    const [isShown, setIsShown] = React.useState(false);
    console.log(props);
    function showResults() {
        props.setCoin(props.coin + props.P1_bet * 2);
        setIsShown(true);

    }

    return (
        <div>
            <button onClick={showResults}>Go!</button>
            {isShown && <div>
                <h2>Results</h2>
                <div>{props.drivers.map((driver) =>
                    driver.position == '1' ? <p key={driver.position}>{driver.driverName} came first!</p> : <p key={driver.position}></p>
                )}</div>
            </div>}
        </div>
    )
}

export default Race