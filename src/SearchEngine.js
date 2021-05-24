import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import Conditions from "./Conditions";
import Description from "./Description";
import Forecast from './Forecast';
import WeatherIcon from "./WeatherIcon"





export default function SearchEngine(props) {
  
  const [weatherData, setWeatherData] = useState({ ready: false});
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response){
   setWeatherData({
   ready: true,
   temperature: Math.round(response.data.main.temp),
   wind: Math.round(response.data.wind.speed),
   coordinates: response.data.coord,
   humidity: response.data.main.humidity,
   description: response.data.weather[0].description,
   city: response.data.name,
   date: new Date(response.data.dt *1000),
   visibility: response.data.visibility / 1000,
   icon: response.data.weather[0].icon,
  })
    }
   
    function handleSubmit(event){
     event.preventDefault();
     search();
   }

    function handleCityChange(event) {
    setCity(event.target.value)
  }
  
  

  function search() {
  const apiKey = "396c00224132d4189b94cab19ab901e7";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleResponse);
 
   }
  
  if(weatherData.ready) {
    return (
   
   <div id="form"> 
   <h1>
      {city}
        </h1> 
   <FormattedDate date={weatherData.date} />
   
<form id="search-form" onSubmit={handleSubmit} >
                <input type="text" 
                placeholder="Search for a city" 
                autocomplete="off" 
                autofocus="on"
                id="search-text-input"
                onChange = {handleCityChange} />
                <input id="search-button" type="submit" value="Search" />
            </form>
             <div className="row">
               <div className="float-left">
      <WeatherIcon code={weatherData.icon} />        
      </div>
      <Temperature data={weatherData} celsius={weatherData.temperature}/>
      <Conditions data={weatherData} />
    </div>   
      <Description data = {weatherData}/>
      <Forecast />
     </div>
           
            
);
  } 
  else {
  search();
  return "Loading...";

  }
}