import React from "react";
import './App.css';

export default function Conditions(props) {
return(

  <div class="col-6" id="weather-description">
  <ul>
      <li>
          Humidity: <span id="humidity">{props.data.humidity}</span>%</li>
      <li>
          Wind: <span id="wind-speed">{props.data.wind}</span> Km/h</li>
          <li>
          visibility: <span id="wind-speed">{props.data.visibility}</span>%</li>
  </ul>
</div>

)
}