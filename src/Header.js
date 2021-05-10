import React from "react";
 
export default function Header(props){

    let date = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let day = days[date.getDay()];

let hour = date.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = date.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
 }


    return(
        <div className="header">
        <h1>
         Buenos Aires
        </h1>
        <h3>
            Today is Wednesday, 20:30 pm
        </h3>
        </div>
    )
}