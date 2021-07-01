import { useContext } from "react";
import Person from "../Person";
import { UsersContext } from "../UsersContext";

import "./styles.css";

export default function NumbersList({ persons }) {
  const usersContext = useContext(UsersContext);
  console.log(usersContext);

  return (
    <ul className="numbers-list">
      {persons.map((person) => (
        <Person key={person.name} person={person} />
      ))}
    </ul>
  );
}
