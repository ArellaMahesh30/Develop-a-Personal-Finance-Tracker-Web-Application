

import React, { useState } from 'react';
import './App.css'; 
import LoginForm from './components/Auth/LoginForm';
import LogoutButton from './components/Auth/LogoutButton';
import RecentTransactions from './components/Dashboard/RecentTransactions';
import Balance from './components/Dashboard/Balance';
import TransactionForm from './components/Transactions/TransactionForm';
import MonthlySummary from './components/Reports/MonthlySummary';

// Define the calculateIncomeAndExpenses function
const calculateIncomeAndExpenses = (transactions) => {
  let totalIncome = 0;
  let totalExpenses = 0;

  transactions.forEach((transaction) => {
    if (transaction.amount > 0) {
      // Income
      totalIncome += transaction.amount;
    } else {
      // Expense
      totalExpenses -= transaction.amount; // Convert negative amount to positive
    }
  });

  return { totalIncome, totalExpenses };
};

function App() {
  // State to manage authentication
  const [user, setUser] = useState(null);

  // State to manage transactions
  const [transactions, setTransactions] = useState([]);
  const [balance, setBalance] = useState(0);

  // Function to handle login
  const handleLogin = (username) => {
    setUser(username);
  };

  // Function to handle logout
  const handleLogout = () => {
    setUser(null);
  };

  // Function to handle transaction submission
  const handleSubmitTransaction = (transaction) => {
    // Update transactions array
    setTransactions([...transactions, transaction]);
    // Update balance
    setBalance(balance + transaction.amount);
  };

  // Calculate total income and expenses
  const { totalIncome, totalExpenses } = calculateIncomeAndExpenses(transactions);

  return (
    <div className="App">
      <h1>Personal Finance Tracker</h1>
      {user ? (
        <>
          <p>Welcome, {user}!</p>
          <LogoutButton onLogout={handleLogout} />
          <div className="Dashboard">
            <Balance balance={balance} />
            <RecentTransactions transactions={transactions} />
            <TransactionForm onSubmit={handleSubmitTransaction} />
          </div>
          <MonthlySummary
            month="January 2024" // Month placeholder
            income={totalIncome} // Pass total income as prop
            expenses={totalExpenses} // Pass total expenses as prop
          />
        </>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
