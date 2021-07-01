import { useState, useContext } from "react";
import ErrorCard from "../ErrorCard";
import { UsersContext } from "../UsersContext";
import InputForm from "../InputForm";
import "./styles.css";

export default function Form() {
  const [newName, setNewName] = useState("");
  const [newPhoneNumber, setNewPhoneNumber] = useState("");
  const [errorMessage, setError] = useState(null);

  const { users, setUsers } = useContext(UsersContext);

  const addErrorMessage = (newName) => {
    const message = newName
      ? `${newName} is already added to phonebook`
      : "Missing values";
    setError(message);
  };

  const addPerson = (newUser) => {
    setUsers([...users, newUser]);
    setError(null);
  };

  const resetInputs = () => {
    setNewName("");
    setNewPhoneNumber("");
  };

  const validateInputs = () => !!newName && !!newPhoneNumber;

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setNewPhoneNumber(event.target.value);
  };

  const isUserStored = (users, newUser) => {
    return users.find((user) => user.name === newUser.name);
  };

  const handleSubmit = (newUser) => {
    const user = isUserStored(users, newUser);
    !!user ? addErrorMessage(newUser.name) : addPerson(newUser);
    resetInputs();
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    const newUser = {
      name: newName,
      phone: newPhoneNumber,
    };
    const fulfilledInputs = validateInputs();
    fulfilledInputs ? handleSubmit(newUser) : addErrorMessage();
  };

  const getButtonClassNameOnInputValuesStatus = () =>
    newName && newPhoneNumber
      ? "form__button"
      : "form__button form__button--disabled";

  const buttonClassName = getButtonClassNameOnInputValuesStatus();

  return (
    <form className="form-container" onSubmit={onSubmitForm}>
      <div className="form-group">
        <InputForm
          label="Name *"
          id="name"
          value={newName}
          handleInputChange={handleNameChange}
        />
        <InputForm
          label="Phone number *"
          id="phone-number"
          value={newPhoneNumber}
          handleInputChange={handlePhoneNumberChange}
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
