import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.min.js';
// import "./Nav.css";
import './App.css';
import PlacesToVisit from "./Navitem/PlaceToVisit";

import Timetovisit from "./components/Timetovisit";

import Navbar from "./Navbar";

import Place1 from "./Place1" ;


function App() {
  return (
    <div className="App">
      <Navbar />
  
      <Routes>
        <Route path="/" element={<Place1 />} />
        <Route path="/PlaceToVisit" element={<PlacesToVisit />} />
    <Route path="/Timetovisit" element={<Timetovisit />} />
      </Routes>
 
    </div>
  );
}

export default App;
