// ProfilePage.js
import React, { useState } from 'react';
import './css/profilepage.css';
import Nav from "../templates/Nav"

const initialProfileData = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  // Add more profile information as needed
};

const Profilepage = () => {
  const [profileData, setProfileData] = useState(initialProfileData);
  const [activeSection, setActiveSection] = useState("profileDetails");

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleResetPassword = () => {
      // Implement password reset logic here
      console.log('Password reset:', { password, confirmPassword });
    };

    return (
      <div className={`profile-section ${activeSection === 'resetPassword' ? 'active' : ''}`}>
        <h2>Reset Password</h2>
        <div className="reset-password-form">
          <label htmlFor="password">Old Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="confirmPassword">New Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <label htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button onClick={handleResetPassword}>Reset Password</button>
        </div>
      </div>
    );
  };

  const ProfileUpdate = () => {
    const [newName, setNewName] = useState('');
    const [newEmail, setNewEmail] = useState('');

    const handleProfileUpdate = () => {
      // Implement profile update logic here
      console.log('Profile updated:', { newName, newEmail });
    };

    return (
      <div className={`profile-section ${activeSection === 'profileUpdate' ? 'active' : ''}`}>
        <h2>Profile Update</h2>
        <div className="profile-update-form">
          <label htmlFor="newName">New Name:</label>
          <input
            type="text"
            id="newName"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <label htmlFor="newEmail">New phone:</label>
          <input
            type="phone"
            id="newPhone"
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <label htmlFor="prodile">New profile:</label>
          <input type="file" id="profile"name="profile" />
          <button onClick={handleProfileUpdate}>Update Profile</button>
        </div>
      </div>
    );
  };

  return (
    <>
    <Nav/>
    <div className="profile-container">
      <div className="sidebar">
        <button onClick={() => handleSectionChange('profileDetails')}>Profile Details</button>
        <button onClick={() => handleSectionChange('resetPassword')}>Reset Password</button>
        <button onClick={() => handleSectionChange('profileUpdate')}>Profile Update</button>
      </div>
      <div className="content">
        <h1>My Profile</h1>
        {(activeSection === 'profileDetails') && (
          <div className="profile-section active">
            <h2>Profile Details</h2>
            <img src="" alt="profile image here" />
            <div className="profile-details">
              <p>Name: {profileData.name}</p>
              <p>Email: {profileData.email}</p>
              {/* Add more profile information as needed */}
            </div>
          </div>
        )}
        {(activeSection === 'resetPassword') && <ResetPassword />}
        {(activeSection === 'profileUpdate') && <ProfileUpdate />}
      </div>
    </div>
    </>
  );
};

export default Profilepage;
