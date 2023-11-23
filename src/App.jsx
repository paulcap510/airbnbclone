import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar.jsx'
import Hero from './Hero.jsx'
import Card from './Card.jsx'
import data from './data.js'


function App() {
  const [count, setCount] = useState(0)

  const cards = data.map(item => {
    return (
      <Card 
          key={item.id}
          item={item}
          // img={item.coverImg}
          // rating={item.stats.rating}
          // reviewCount={item.stats.reviewCount}
          // location={item.location}
          // title={item.title}
          // price={item.price}
          // openSpots={item.openSpots}
  />
    )
  }) 

  return (


    <>
    <Navbar />
    <Hero />
    <section className="cards-list">
                {cards}
            </section>    </>
    )}
 

export default App



/* 
<div>
      <h2>Events</h2>
      {eventData.map((event) => (
        <div key={event.id}>
          <img src={`./src/images/${event.coverImg}`} alt={event.title} />
          <p>Rating: {event.stats.rating}</p>
          <p>{event.stats.reviewCount} Reviews</p>
          <p>Price: ${event.price}</p>
          <p>{event.title}</p>
        </div>
      ))} */
    /* </div> */


    /* <div>
      <h1>Events</h1>
      <ul>
        {eventData.map((event) => (
          <li key={event.id}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>Price: ${event.price}</p>
            <p>Location: {event.location}</p>
          </li>
        ))}
      </ul>
    </div> */
