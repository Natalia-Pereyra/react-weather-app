import React from "react";


export default function Forecast(){


    return(
        <div className="row" id="all-forecast">
            <div class="col-2 text-center">
                <h6>09:00</h6>
              <img 
                  className="w-100"
                 src="http://openweathermap.org/img/wn/10d@2x.png"
                 alt=""/>
                <div class="weather-forecast-temperature">
                <strong>10°C </strong>7°C
            </div>
            </div>
             <div class="col-2 text-center">
                <h6>09:00</h6>
                <img
                className="w-100" src="http://openweathermap.org/img/wn/01d@2x.png" 
                
                alt=""
                id="forecast-icon"/>
                <div class="weather-forecast-temperature">
                <strong>10°C </strong>7°C
            </div>
            </div>
             <div class="col-2 text-center">
                <h6>09:00</h6>
                <img 
                className="w-100"
                src="http://openweathermap.org/img/wn/04d@2x.png" 
                
                alt=""
                id="forecast-icon"/>
                <div class="weather-forecast-temperature">
                <strong>10°C </strong>7°C
            </div>
            </div>
             <div class="col-2 text-center">
                <h6>09:00</h6>
                <img 
                className="w-100"
                src="http://openweathermap.org/img/wn/03d@2x.png" 
                
                alt=""
                id="forecast-icon"/>
                <div class="weather-forecast-temperature">
                <strong>10°C </strong>7°C
            </div>
            </div>
             <div class="col-2 text-center">
                <h6>09:00</h6>
                <img 
                className="w-100"
                src="http://openweathermap.org/img/wn/11d@2x.png" 
                
                alt=""
                id="forecast-icon"/>
                <div class="weather-forecast-temperature">
                <strong>10°C </strong>7°C
            </div>
            </div>
             <div class="col-2 text-center">
                <h6>09:00</h6>
                <img 
                className="w-100"
                src="http://openweathermap.org/img/wn/01d@2x.png" 
                
                alt=""
                id="forecast-icon"/>
                <div class="weather-forecast-temperature">
                <strong>10°C </strong>7°C
            </div>
            </div>
            
        </div>
    )
}