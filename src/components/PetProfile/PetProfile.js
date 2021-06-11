import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./PetProfile.css";

const BASE_URL = 'http://localhost:4000/pets'

function PetProfile() {
  const [pet, setPet] = useState({});
  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const URL = `${BASE_URL}/${id}`;
    fetch(URL)
      .then(r => r.json())
      .then(petData => {
        setPet(petData);
      })
      .catch(err => console.error(err))
  }, [])

  useEffect(() => {
    console.log(pet);
  }, [pet])

  return (
    <div className="pet-profile-container">
      <h2 className="pet-profile-heading">{pet.name}</h2>
      <img className="pet-profile-img" src={pet.imgSrc} />
      <p className="pet-profile-detail">Type: {pet.type}</p>
      <p className="pet-profile-detail">Breed: {pet.breed}</p>
      <p className="pet-profile-detail">Age: {pet.age}</p>
      <p className="pet-profile-detail">Location: {pet.location}</p>
    </div>
  )
}

export default PetProfile;
