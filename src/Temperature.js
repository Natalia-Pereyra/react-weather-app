import React from "react";

export default function Temperature(props) {
  return (
   
    <div className="col-6">
        <div className="d-flex align-items-center">
        <img src={props.data.iconURL}
        id="icon"
        alt=""
        className="float-left"/>
        <div className="d-flex temperature"> 
            <strong id="temperature">{props.data.temperature}</strong>
            <span className="units">
            <p id="celsius-link">°C</p><p id="fahrenheit-link">⎢F</p>
            </span>
        </div>
        </div>
</div>
    
  )

}