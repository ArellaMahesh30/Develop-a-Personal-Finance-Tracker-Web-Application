import React from 'react';

const LogoutButton = ({ onLogout }) => {
  const handleLogout = () => {
    // Perform logout action
    onLogout();
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
