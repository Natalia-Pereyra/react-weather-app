import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";


export default function Forecast(props){
    let [loaded, setLoaded] = useState(false);
    let [forecast, setForecast] = useState(null);

     useEffect(() =>{
    setLoaded(false);
  }, [props.coordinates]);

     function handleResponse(response){
         setForecast(response.data.daily);
         setLoaded(true);
     }

    if(loaded) {
     
    return (
       <div className="Forecast" id="all-forecast">
       <div className="row">
           {forecast.map(function (dailyforecast, index) {
               if (index <5) {
               return(
                   <div className="col" key={index}>
                   <ForecastDay data={dailyforecast}/>
                   </div>          
                   );}
                   return null;
                })}
          </div>
          </div>        
          );
      
        } else { 
     const apiKey = "396c00224132d4189b94cab19ab901e7";
     let longitude = props.coordinates.lon;      
     let latitud = props.coordinates.lat;              
     let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitud}&lon=${longitude}&appid=${apiKey}&units=metric`;
    
     axios.get(apiUrl).then(handleResponse);
    
     return null;
        }
   
          }