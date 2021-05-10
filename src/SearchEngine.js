import React, {useState} from "react";
import axios from "axios";
import Header from "./Header";

export default function SearchEngine(props) {
let [city, setCity] = useState("New York");
let [weather, setWeather] = useState("");




 function handleResponse(response){
  let city = response.data.name;
  let temperature = Math.round(response.data.main.temp);
  let description = response.data.weather[0].description;
  let humidity = response.data.main.humidity;
  let wind = Math.round(response.data.wind.speed);
  let icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`;

  setWeather(
   <div className="header">
     
    </div>
  )
 }


    let apiKey = "087811ad20c5b942f2408cdd748d2b31";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
   



  function handleSubmit(event){
    event.preventDefault();
  }  
  

function updateCity(event){
  setCity(event.target.value);
}


return (
<div>
  <div>
  {weather}
  </div>
  <div id="form">
<form id="search-form">
                <input type="text" placeholder="Search for a city" autocomplete="off" autofocus="on"
                    id="search-text-input" />
                <input id="search-button" type="submit" value="Search" />
            </form>
            </div>
</div>
);
}