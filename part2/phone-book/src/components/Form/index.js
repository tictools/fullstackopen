import { useState } from "react";

export default function Form({ handleSubmit }) {
  const [newName, setNewName] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    handleSubmit(newName);
    setNewName("");
  };

  return (
    <form onSubmit={onSubmitForm}>
      <div>
        name: <input name="name" value={newName} onChange={handleNameChange} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
}
