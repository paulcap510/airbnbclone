import React from 'react';
// import myImage from './images/photo-grid.png'; // Adjust the path based on your folder structure
import './Card.css';


function Card(props) {
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else  if 
        (props.item.location === "Online" ) {
            badgeText = "ONLINE"
        }
    
    return (

        <div className="card">

        {badgeText && <div className="card--badge">{badgeText}</div>}


            <img src={`/src/images/${props.item.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src="src/images/star.png" 
                className="card--star" />
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) • </span>
                <span clasName="gray">{props.item.location}</span>
            </div>
            <p>{props.item.title}</p>
            <p><span className="bold">From ${props.item.price}</span> / person</p>
        </div>
    ) 
}

export default Card 