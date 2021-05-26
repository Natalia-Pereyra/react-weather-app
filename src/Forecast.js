import React from "react";
import WeatherIcon from "./WeatherIcon";


export default function Forecast(){


    return(
       <div className="Forecast" id="all-forecast">
       <div className="row">
       <div className="col">
       <div classNAme="Forecast-day">Thu</div>
       <WeatherIcon code="01d" size={35}/>
       <div className="Forecast-temperatures">
           <span className="Forecast-temperature-max">12°</span>
            <span className="Forecast-temperature-min">06°</span>

       </div>
       </div>    
       </div>
       </div>        
          );
          }