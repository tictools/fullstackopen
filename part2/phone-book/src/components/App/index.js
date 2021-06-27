import React, { useState } from "react";
import Form from "../Form";
import Header from "../Header";
import NumbersList from "../NumbersList";

import "./index.css";

export default function App() {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [error, setError] = useState(null);

  const addPerson = (newName) => {
    setPersons([...persons, { name: newName }]);
    setError(null);
  };

  const addError = (newName) => {
    setError(`${newName} has been already added to the list`);
  };

  const handleSubmit = (newName) => {
    const isNameDefined = persons.find((person) => person.name === newName);
    !!isNameDefined ? addError(newName) : addPerson(newName);
  };

  return (
    <div className="app-container">
      <section className="app-container__section">
        <Header label="Phonebook" />
        <Form handleSubmit={handleSubmit} error={error} />
      </section>
      <section>
        <Header label="Numbers" />
        <NumbersList persons={persons} />
      </section>
    </div>
  );
}
