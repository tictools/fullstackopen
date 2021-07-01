import { useState } from "react";
import InputForm from "../InputForm";
import "./styles.css";

export default function FilterBar() {
  const [filter, setFilter] = useState("");
  return (
    <form className="filter-form">
      <InputForm
        label="Filter by user"
        id="filter"
        value={filter}
        handleInputChange={setFilter}
      />
    </form>
  );
}
