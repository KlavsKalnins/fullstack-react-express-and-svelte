import { useEffect, useState } from "react";
import "./App.css";
import { UserTable } from "./components/UserTable";
import { CreateUser } from "./components/CreateUser";

function App() {
  return (
    <div className="App">
      <UserTable />
      <CreateUser />
    </div>
  );
}

export default App;
