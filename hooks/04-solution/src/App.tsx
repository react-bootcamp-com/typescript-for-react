import React, { useState, useContext, createContext } from "react";

interface CurrentUser {
  username: string;
}

const CurrentUserContext = createContext<CurrentUser>({} as CurrentUser);

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
