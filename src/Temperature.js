import React from "react";

export default function Temperature() {
  return (
   
    <div className="col-6">
        <div className="d-flex align-items-center">
        <img src="http://openweathermap.org/img/wn/10d@2x.png"
        id="icon"
        alt=""
        className="float-left"/>
        <div className="d-flex temperature"> 
            <strong id="temperature">14</strong>
            <span className="units">
            <p className="Celsius">°C</p><p className="Farenheit">⎢F</p>
            </span>
        </div>
        </div>
</div>
    
  )

}