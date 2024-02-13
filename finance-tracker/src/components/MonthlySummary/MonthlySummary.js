// MonthlySummary.js

import React from 'react';

const MonthlySummary = ({ month, income, expenses }) => {
  return (
    <div className="MonthlySummary">
      <h2>{month} Summary</h2>
      <p>Total Income: ${income}</p>
      <p>Total Expenses: ${expenses}</p>
      <p>Net Income: ${income - expenses}</p>
    </div>
  );
};

export default MonthlySummary;
