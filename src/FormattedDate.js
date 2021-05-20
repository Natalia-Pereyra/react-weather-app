import React from "react";

 
export default function FormattedDate(props){
console.log(props.date);

let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
]

let hours = props.date.getHours();
let minutes = props.date.getMinutes();

if (minutes <10) {
    minutes = `0${minutes}`
}
if (hours <10) {
    hours = `0${hours}`
}

return (
    <div>
        Today is , {hours}:{minutes}
    </div>)
}