import React, { useState } from "react";
import Form from "../Form";
import Header from "../Header";

export default function App() {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);

  const handleSubmit = (newName) => {
    setPersons([...persons, { name: newName }]);
  };

  console.log(persons);

  return (
    <div>
      <Header label="Phonebook" />
      <Form handleSubmit={handleSubmit} />
      <Header label="Numbers" />
    </div>
  );
}
