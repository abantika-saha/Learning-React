import React, { useState } from "react";
import AddUser from "./components/Users/AddUser";
import UsersList from "./components/Users/UsersList";

function App() {
  const [userData, setUserData] = useState([]);

  function addUserData(UName, uAge) {
    setUserData((previousData) => {
      return [
        ...previousData,
        { name: UName, age: uAge, id: Math.random().toString() },
      ];
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserData}></AddUser>
      <UsersList users={userData}></UsersList>
    </div>
  );
}

export default App;
