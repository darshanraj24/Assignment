import React from 'react';

const ProfilePage = ({ selectedUser }) => {
  return (
    <div className=''>
      {selectedUser && (
        <div className="user-details">
          <h3>{selectedUser.name}</h3>
          <p>{selectedUser.username}</p>
          <img src={selectedUser.profilepicture} alt={selectedUser.username} />
        </div>
      )}

      <div className="profile-page">
        <div className="section-box">
          <h3>Posts Details</h3>
          <div className="coming-soon">Coming Soon</div>
        </div>
        <div className="section-box">
          <h3>Gallery</h3>
          <div className="coming-soon">Coming Soon</div>
        </div>
        <div className="section-box">
          <h3>To-Do</h3>
          <div className="coming-soon">Coming Soon</div>
        </div>
      </div>
    </div>

  );
};

export default ProfilePage;
