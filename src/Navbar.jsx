import React from 'react';
import myImage from './images/airbnb-logo.png'; // Adjust the path based on your folder structure
import './Navbar.css';

function Navbar() {
   return(
    <nav>
        <img src={myImage} alt="My Image" />
    </nav>
   ) 
}

export default Navbar 