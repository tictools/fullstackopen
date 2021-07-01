import React, { useState } from "react";
import Form from "../Form";
import Header from "../Header";
import NumbersList from "../NumbersList";
import { UsersContextProvider } from "../UsersContext";

import "./index.css";

export default function App() {
  return (
    <div className="app-container">
      <UsersContextProvider>
        <section className="app-container__section">
          <Header label="Register" />
          <Form />
        </section>
        <section className="app-container__section">
          <Header label="Phonebook" />
          <NumbersList />
        </section>
      </UsersContextProvider>
    </div>
  );
}
