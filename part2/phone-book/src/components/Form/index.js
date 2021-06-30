import { useState } from "react";
import ErrorCard from "../ErrorCard";
import "./styles.css";

export default function Form({ handleSubmit, errorMessage }) {
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    console.log(event.target.value);
    setNewPhoneNumber(event.target.value);
  };

  const onSubmitForm = (event) => {
    event.preventDefault();

    const newPerson = {
      name: newName,
      phone: newPhoneNumber,
    };

    handleSubmit(newPerson);
    setNewName("");
    setNewPhoneNumber("");
  };

  const getButtonClassNameOnInputValuesStatus = () =>
    newName && newPhoneNumber
      ? "form__button"
      : "form__button form__button--disabled";

  const buttonClassName = getButtonClassNameOnInputValuesStatus();

  return (
    <form className="form-container" onSubmit={onSubmitForm}>
      <div className="form-group">
        <label className="form__label" htmlFor="name">
          Name *
        </label>
        <input
          className="form__input"
          id="name"
          value={newName}
          onChange={handleNameChange}
        />
        <label className="form__label" htmlFor="phone-number">
          Phone number *
        </label>
        <input
          className="form__input"
          id="phone-number"
          value={newPhoneNumber}
          onChange={handlePhoneNumberChange}
        />
      </div>
      <div className="form-group">
        <button className={buttonClassName} type="submit">
          ADD A NEW ENTRY
        </button>
      </div>
      {errorMessage ? <ErrorCard errorMessage={errorMessage} /> : null}
    </form>
  );
}
