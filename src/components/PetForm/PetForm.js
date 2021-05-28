import React, { useState } from 'react'
import "./PetForm.css"

function PetForm({ addPet }) {
  const [formState, setFormState] = useState({
    name: "",
    type: "",
    breed: "",
    age: undefined
  })

  function handleChange(event) {
    const userInput = event.target.value;
    const fieldName = event.target.name;
    setFormState({
      ...formState,
      [fieldName]: userInput
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    const pet = {
      name: formState.name,
      type: formState.type,
      breed: formState.breed,
      age: parseInt(formState.age)
    };
    addPet(pet);
  }

  return (
    <div className="pet-form">
      <h2 className="pet-form-heading">Add a Pet</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            type="text" 
            name="name" 
            value={formState.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Type:
          <input
            type="text"
            name="type"
            value={formState.type}
            onChange={handleChange}
          />
        </label>
        <label>
          Breed:
          <input
            type="text"
            name="breed"
            value={formState.breed}
            onChange={handleChange}
          />
        </label>
        <label>
          Age:
          <input
            type="text"
            name="age"
            value={formState.age}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Add Pet</button>
      </form>
    </div>
  )
}

export default PetForm;
