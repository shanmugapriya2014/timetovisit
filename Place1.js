import React from 'react'

import Chennai from "./components/Chennai";
import Rameswaram from "./components/Rameshwaram";
import Kodaikanal from "./components/Kodaikanal";
import Ooty from "./components/Ooty";
import Kanyakumari from "./components/Kanyakumari";
import Kumbakonam from "./components/Kumbakonam";
import Madurai from "./components/Madurai";
import Yarcaud from "./components/Yarcaud";
import Theni from "./components/Theni";
import Hogerakkal from "./components/Hogerakkal";
import TouristPlaces from "./components/TouristPlace"
import Home from './components/Home';

export const Place1 = () => {
  return (
    <div>
      <Home />
      <TouristPlaces />
      <Chennai />
      <Rameswaram />
      <Kodaikanal />
      <Ooty />
      <Kanyakumari />
      <Kumbakonam />
      <Madurai />
      <Yarcaud />
      <Theni />
      <Hogerakkal />
    </div>
  )
}

export default Place1;
