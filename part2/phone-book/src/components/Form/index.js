import { useState } from "react";
import "./styles.css";

export default function Form({ handleSubmit, error }) {
  const [newName, setNewName] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    handleSubmit(newName);
    setNewName("");
  };

  const buttonClassName =
    newName && !error ? "form__button" : "form__button form__button--disabled";

  console.log(buttonClassName);

  return (
    <form className="form-container" onSubmit={onSubmitForm}>
      <div className="form-group">
        <label className="form__label" htmlFor="name">
          Insert a new name
        </label>
        <input
          className="form__input"
          name="name"
          value={newName}
          onChange={handleNameChange}
        />
      </div>
      <div className="form-group">
        <button className={buttonClassName} type="submit">
          Add new name
        </button>
      </div>
      {error ? <div>{error}</div> : null}
    </form>
  );
}
