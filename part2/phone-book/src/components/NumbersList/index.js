import { useContext } from "react";
import Person from "../Person";
import { UsersContext } from "../UsersContext";

import "./styles.css";

export default function NumbersList() {
  const { users } = useContext(UsersContext);

  return (
    <ul className="numbers-list">
      {users.length ? (
        users.map((user) => <Person key={user.name} user={user} />)
      ) : (
        <p>Empty list</p>
      )}
    </ul>
  );
}
