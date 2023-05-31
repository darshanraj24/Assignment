import React, { useEffect, useState } from 'react';
import LandingPage from './LandingPage';
import ProfilePage from './ProfilePage';

const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://panorbit.in/api/users.json")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.users);
      })
      .catch((error) => console.log("Error fetching user data:", error));
  }, []);

  const handleUserSelect = (user) => {
    setSelectedUser(user);
  };

  const handleSignOut = () => {
    setSelectedUser(null);
  };

  return (
    <div>
      {selectedUser ? (
        <div>
          <ProfilePage selectedUser={selectedUser} />
          <button className="sign-out-btn" onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <LandingPage users={users} onUserSelect={handleUserSelect} />
      )}
    </div>
  );
};

export default App;
