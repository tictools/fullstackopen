import React, { useState } from "react";
import Form from "../Form";
import Header from "../Header";
import NumbersList from "../NumbersList";

import "./index.css";

export default function App() {
  const [persons, setPersons] = useState([
    {
      name: "Arto Hellas",
      phone: 123456789,
    },
  ]);
  const [error, setError] = useState(null);

  const addPerson = (newPerson) => {
    setPersons([...persons, newPerson]);
    setError(null);
  };

  const addError = (newName) => {
    setError(`${newName} is already added to phonebook`);
  };

  const handleSubmit = (newPerson) => {
    const isNameDefined = persons.find(
      (person) => person.name === newPerson.name
    );
    !!isNameDefined ? addError(newPerson.name) : addPerson(newPerson);
  };

  return (
    <div className="app-container">
      <section className="app-container__section">
        <Header label="Phonebook" />
        <Form handleSubmit={handleSubmit} errorMessage={error} />
      </section>
      <section className="app-container__section">
        <Header label="Numbers" />
        <NumbersList persons={persons} />
      </section>
    </div>
  );
}
