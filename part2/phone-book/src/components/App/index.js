import React from "react";
import Form from "../Form";
import Header from "../Header";
import PhonebookList from "../PhonebookList";
import FilterBar from "../FilterBar";
import { UsersContextProvider } from "../../context/UsersContext";
import { FilterContextProvider } from "../../context/FilterContext";

import "./index.css";

export default function App() {
  return (
    <div className="app-container">
      <UsersContextProvider>
        <FilterContextProvider>
          <section className="app-container__section">
            <Header label="Register" />
            <Form />
          </section>
          <section className="app-container__section">
            <Header label="Phonebook" />
            <FilterBar />
            <PhonebookList />
          </section>
        </FilterContextProvider>
      </UsersContextProvider>
    </div>
  );
}
