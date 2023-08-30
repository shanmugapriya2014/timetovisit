import React from 'react'
import { Link } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
  return (
    <header >
    <h3 className="log">TAMILNADU TOURISM</h3>
    <nav className="items">
      <Link to = "/" className='it'>Home</Link>
      <Link to = "/PlaceToVisit" className='it'>Places To Visit</Link>
      <Link to = "/Timetovisit" className='it'>Best Time To Visit</Link>
      <Link to = "/Packages" className='it'>Packages</Link>
      <Link to = "/Destination" className='it'>Destination</Link>
      <Link to = "/Food" className='it'>Food</Link>
    </nav>
    </header>
  )
}

export default Navbar