import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"
import Puppies from "./images/puppies.jpeg"

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-heading">Pet Adoption Agency</h1>
      <img className="home-img" alt="puppies" src={Puppies} />
      <Link className="home-link" to="/pets">Show Me More!</Link>
    </div>
  )
}

export default Home;
