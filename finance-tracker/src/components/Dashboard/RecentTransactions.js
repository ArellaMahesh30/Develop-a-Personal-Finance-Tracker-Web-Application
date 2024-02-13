// RecentTransactions.js

import React from 'react';

import './RecentTransactions.css';

const RecentTransactions = ({ transactions }) => {
  return (
    <div>
      <h2>Recent Transactions</h2>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index}>
            <p>Date: {transaction.date}</p>
            <p>Category: {transaction.category}</p>
            <p>Amount: {transaction.amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentTransactions;
