import React from 'react';

import './Balance.css';


const Balance = ({ balance }) => {
  return (
    <div>
      <h2>Current Balance</h2>
      <p>${balance}</p>
    </div>
  );
};

export default Balance;
