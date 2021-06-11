import React, { useState, useEffect } from 'react'
import "./PetContainer.css"
import Pet from '../Pet/Pet'
import PetForm from "../PetForm/PetForm";

const BASE_URL = 'http://localhost:4000/pets';

function PetContainer() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch(BASE_URL)
      .then(r => r.json())
      .then(petData => setPets(petData))
  }, [])

  function deletePet(petId) {
    const URL = `${BASE_URL}/${petId}`; // BASE_URL + `/${petId}`
    const config = { method: "DELETE" };
    fetch(URL, config)
      .then(r => r.json())
      .then(() => {
        const newPets = pets.filter(pet => pet.id !== petId);
        setPets(newPets);
      })
  }

  function addPet(pet) {
    const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pet)
    }

    fetch(BASE_URL, config)
      .then(r => r.json())
      .then(newPet => {
        const newPets = [...pets, newPet];
        setPets(newPets);
      })
  }

  function updatePet(id, updatedPet) {
    fetch(`${BASE_URL}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPet),
    })
      .then((r) => r.json())
      .then((updatedPet) => {
        const updatedPets = pets.map((pet) => {
          if (pet.id === updatedPet.id) return updatedPet;
          return pet;
        });
        setPets(updatedPets);
      });
  }

  return (
    <div className="pet-container">
      <PetForm addPet={addPet} />
      <div className="pet-container-list">
        { pets.length === 0
          ? <h1>Loading...</h1>
            :pets.map(pet => {
              return <Pet 
                        key={pet.id} 
                        pet={pet} 
                        deletePet={deletePet}
                        updatePet={updatePet}
                      /> })
        }
      </div>
    </div>
  )
}

export default PetContainer;