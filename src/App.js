import logo from './logo.svg';
import './App.css';
import Weather from "./Weather";
import Conditions from "./Conditions";
import Description from "./Description";
import Header from "./Header";
import Form from "./Form";
import Temperature from "./Temperature";

function App() {
  return (
    <div className="App">
    <Header /> 
    <Form />
     <div className="row-6">
      <Temperature />
      <Conditions />
    </div>   
      <Description />
     </div>
  );
}

export default App;
