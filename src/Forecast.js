import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";


export default function Forecast(props){

     function handleResponse(response){
         console.log(response.data);
     }

    const apiKey = "396c00224132d4189b94cab19ab901e7";
    let longitude = props.coordinates.lon;
    let latitud = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitud}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    
    
    return(
       <div className="Forecast" id="all-forecast">
       <div className="row">
       <div className="col">
       <div classNAme="Forecast-day">Thu</div>
       <div className="Forecast-icons">
       <WeatherIcon code="01d" size={35} classNAme="Forecast-icons"/>
       </div>
       <div className="Forecast-temperatures">
           <span className="Forecast-temperature-max">12°</span>
            <span className="Forecast-temperature-min">06°</span>

       </div>
       </div>    
       </div>
       </div>        
          );
          }