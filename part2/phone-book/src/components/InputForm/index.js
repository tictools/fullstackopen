import { Fragment } from "react";
import "./styles.css";

export default function InputForm({ label, id, value, handleInputChange }) {
  return (
    <Fragment>
      <label className="form__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="form__input"
        id={id}
        value={value}
        onChange={handleInputChange}
      />
    </Fragment>
  );
}
