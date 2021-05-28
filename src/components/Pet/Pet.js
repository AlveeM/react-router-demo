import React from 'react';
import "./Pet.css";
import { Link } from 'react-router-dom';

function Pet({ pet, deletePet, updatePet }) {
  const { id, name, type, breed, age } = pet

  function handleAdoptClick() {
    deletePet(id);
  }

  function handleChangePetClick() {
    // lines 13-16 is a shorter way to write lines 18-23 (look up spread operator)
    // const updatedPet = {
    //   ...pet,
    //   name: "Champion"
    // }

    const updatedPet = {
      name: "Champion",
      type: type,
      breed: breed,
      age: age,
    }
    updatePet(id, updatedPet)
  }

  return (
    <div className="pet">
      <h2>
        <Link to={`/pets/${id}`}>{name}</Link>
      </h2>
      <div className="pet-desc">
        <p>Type: {type}</p>
        <p>Breed: {breed}</p>
        <p>Age: {age}</p>
      </div>
      <button className="pet-btn" onClick={handleAdoptClick}>Adopt Pet</button>
      <button className="pet-btn" onClick={handleChangePetClick}>Change Pet</button>
    </div>
  )
}

export default Pet;