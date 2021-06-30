import Person from "../Person";

import "./styles.css";

export default function NumbersList({ persons }) {
  return (
    <ul className="numbers-list">
      {persons.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </ul>
  );
}
