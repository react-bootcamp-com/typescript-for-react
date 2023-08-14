import React, { useState, useContext, createContext } from "react";

const CurrentUserContext = createContext();

export default function App() {
  const [currentUser, setCurrentUser] = useState({
    username: "Paul Brown",
  });

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Profile />
    </CurrentUserContext.Provider>
  );
}

function Profile() {
  const currentUser = useContext(CurrentUserContext);

  return <p>Welcome, {currentUser.username}!</p>;
}
