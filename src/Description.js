import React from "react";

export default function Description(props) {
  return(
   
    <small className="capitalize-text"  id="description-weather">
       {props.data.description}
    </small>
  )
}