import React from 'react';

import './MonthlySummary.css';

const MonthlySummary = ({ month, income, expenses }) => {
  return (
    <div>
      <h2>{`Monthly Summary - ${month}`}</h2>
      <p>Total Income: ${income}</p>
      <p>Total Expenses: ${expenses}</p>
      <p>Net Income: ${income - expenses}</p>
    </div>
  );
};

export default MonthlySummary;
