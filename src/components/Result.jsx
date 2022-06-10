import React from "react";
import Race from "./Race.jsx";
import redCar from "../assets/red.jpg";
import blueCar from "../assets/blue.jpg";
import yellowCar from "../assets/yellow.jpg";
import brownCar from "../assets/brown.jpg";

function Result(props) {

React.useEffect(() => {
    let x = 0;
    let start;
    let animateReq;
    function animate(timestamp, position) {
        if (start === undefined)
            start = timestamp;
        const elapsed = timestamp - start;
        // increment x by 2 each iteration
        x += 0.47;

        // set our object's left property to x
        document.querySelector("#car1").style.left = x * 2 + "px";
        document.querySelector("#car2").style.left = x * 3 + "px";
        document.querySelector("#car3").style.left = x * 4 + "px";
        document.querySelector("#car4").style.left = x + "px";

        animateReq = requestAnimationFrame(animate);
        if (elapsed >= 3084) { // Stop the animation after 10 seconds
            cancelAnimationFrame(animateReq);
        }
    }

    animate()
}, [])
    

    return (
        <div id="container">
        <img src={blueCar} id="car1"  class="car"/>
        <img src={yellowCar} id="car2" class="car"/>
        <img src={redCar} id="car3" class="car"/>
        <img src={brownCar} id="car4" class="car"/>
    </div>
    )


}

export default Result