import './App.css';
import Conditions from "./Conditions";
import Description from "./Description";
import SearchEngine from "./SearchEngine";
import Temperature from "./Temperature";
import Forecast from './Forecast';



function App() {
  return (
    <div className="App">

    <SearchEngine />
     <div className="row">
      <Temperature />
      <Conditions />
    </div>   
      <Description />
      <Forecast />
     </div>
     );
}

export default App;
