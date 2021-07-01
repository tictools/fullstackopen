import { useContext } from "react";
import User from "../User";
import { UsersContext } from "../../context/UsersContext";
import { FilterContext } from "../../context/FilterContext";

import "./styles.css";

export default function PhonebookList() {
  const { users } = useContext(UsersContext);
  const { filter } = useContext(FilterContext);

  const filterContent = () => {
    const phonebookList = users
      .filter((user) => {
        const toLowerUserName = user.name.toLowerCase();
        const toLowerFilter = filter.toLowerCase();
        return toLowerUserName.includes(toLowerFilter);
      })
      .map((user) => <User key={user.name} user={user} />);

    return phonebookList.length ? phonebookList : "No matches for this filter";
  };

  const filteredContent = filterContent();

  return (
    <ul className="numbers-list">
      {users.length ? filteredContent : <p>Empty list</p>}
    </ul>
  );
}
