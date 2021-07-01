import { Fragment } from "react";
import "./styles.css";

export default function InputForm({
  label,
  placeholder,
  id,
  value,
  handleInputChange,
  autocomplete = "off",
}) {
  return (
    <Fragment>
      <label className="form__label" htmlFor={id}>
        {label}
      </label>
      <input
        className="form__input"
        placeholder={placeholder}
        id={id}
        value={value}
        onChange={handleInputChange}
        autoComplete={autocomplete}
      />
    </Fragment>
  );
}
