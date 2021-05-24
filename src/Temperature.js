import React, {useState} from "react";

export default function Temperature(props) {
const [unit, setUnit] = useState("celsius");

function showCelsius(event) {
  event.preventDefault();
  setUnit("celsius");

}

function showFahrenheit(event) {
  event.preventDefault();
  setUnit("Fahrenheit");
}
if (unit === `celsius`) {
return (
   
    <div className="col-6">
        <div className="d-flex align-items-center">
       
        <div className="d-flex temperature"> 
            <strong id="temperature">{props.data.temperature}</strong>
            <span className="units">
            <p id="celsius-link">°C</p>
            <p id="fahrenheit-link">⎢<a href="/" onClick={showFahrenheit}>F</a></p>
            </span>
        </div>
        </div>
        </div>
  );
} else {
  let fahrenheit = (props.celsius * 9/5) + 32;
  return ( 
  
        <div className="col-6">
        <div className="d-flex align-items-center">
       
        <div className="d-flex temperature"> 
            <strong id="temperature">{Math.round(fahrenheit)}</strong>
            <span className="units">
            <p id="celsius-link"><a href="/" onClick={showCelsius}>°C</a>⎢</p>
            <p id="fahrenheit-link">F</p>
            </span>
        </div>
        </div>
        </div>
        );
}


  

}