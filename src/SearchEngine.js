import React, { useState } from "react";
import axios from "axios";



export default function SearchEngine(props) {
  
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  
  function handleResponse(response){
     setTemperature(Math.round(response.data.main.temp));
     setReady(true);
   
  }

  if(ready) {
    return (

  <div id="form">
<form id="search-form">
                <input type="text" placeholder="Search for a city" autocomplete="off" autofocus="on"
                    id="search-text-input" />
                <input id="search-button" type="submit" value="Search" />
            </form>
            </div>
);
  } else {
    
  const apiKey = "96c00224132d4189b94cab19ab901e7";
  let city = "London";
  let url = `api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(handleResponse);

  return "Loading..."

  }

 



}