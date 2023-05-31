import React from 'react';

const LandingPage = ({ users, onUserSelect }) => {
  return (
    <div className="card">
      <div className="a">
        <div className="card-header">
          <h2>Select an Account</h2>
        </div>
      </div>
      <div className="card-content">
        <div className="user-card-container">
          {users.map((user) => (
            <div className="user-card" key={user.id} onClick={() => onUserSelect(user)}>
              <img src={user.profilepicture} alt={user.username} />
              <h3>{user.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
