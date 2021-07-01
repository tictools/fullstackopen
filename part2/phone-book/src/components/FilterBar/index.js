import { useContext } from "react";
import { FilterContext } from "../../context/FilterContext";
import InputForm from "../InputForm";
import "./styles.css";

export default function FilterBar() {
  const { filter, setFilter } = useContext(FilterContext);

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <form className="filter-form">
      <InputForm
        placeholder="Filter by user"
        id="filter"
        value={filter}
        handleInputChange={handleFilterChange}
      />
    </form>
  );
}
