import React from 'react';
import myImage from './images/photo-grid.png'; // Adjust the path based on your folder structure
import './Hero.css';

function Hero() {
   return(
    <div className="hero">
      <div className="hero-img-div">
        <img src={myImage} alt="My Image" className="hero--photo" />
      </div>
        <div className="hero-img-text">
            <h2 className="hero--header">Online Experiences</h2>
            <p className="hero--text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>        </div>
    </div>
   ) 
}

export default Hero 