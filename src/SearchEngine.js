import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";


export default function SearchEngine(props) {
  
  const [ready, setReady] = useState({ ready: false});
  const [temperature, setTemperature] = useState(null);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState("");

  function handleCityChange(event) {
    setCity(event.target.value)
  }
  
   function handleSubmit(event){
     event.preventDefault();
     search();
   }


  function search() {
  const apiKey = "396c00224132d4189b94cab19ab901e7";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleResponse);
 
   }
  
  function handleResponse(response){
   setWeatherData({
   ready: true,
   temperature: response.data.main.temp,
   wind: response.data.wind.speed,
   coordinates: response.data.coord,
   humidity: response.data.main.humidity,
   description: response.data.weather[0].description,
   city: response.data.name,
   date: new Date(response.data.dt *1000),
  })
     setTemperature(Math.round(response.data.main.temp));
     setReady(true);
   
  }

  if(ready) {
    return (
   
   <div id="form"> 
   <h1>
      
        </h1> 
   <FormattedDate date={weatherData.date} defaultCity="Buenos Aires"/>
   
<form id="search-form" onSubmit={handleSubmit} >
                <input type="text" 
                placeholder="Search for a city" 
                autocomplete="off" 
                autofocus="on"
                id="search-text-input"
                onChange = {handleCityChange} />
                <input id="search-button" type="submit" value="Search" />
            </form>
            </div>
);
  } 
  else {
  search();
  return "Loading..."

  }

 



}