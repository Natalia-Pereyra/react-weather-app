import React from "react";
import './App.css';
import SearchEngine from "./SearchEngine";




function App(props) {
  return (
    <div className="App">
    <SearchEngine defaultCity="Buenos Aires"/>
     </div>
     );
}

export default App;
