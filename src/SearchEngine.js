import React from "react";


export default function SearchEngine(props) {

return (

  <div id="form">
<form id="search-form">
                <input type="text" placeholder="Search for a city" autocomplete="off" autofocus="on"
                    id="search-text-input" />
                <input id="search-button" type="submit" value="Search" />
            </form>
            </div>
);
}