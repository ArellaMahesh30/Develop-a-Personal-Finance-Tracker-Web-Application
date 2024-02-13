import React, { useState } from 'react';

import './TransactionForm.css';

const TransactionForm = ({ onSubmit }) => {
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form fields
    if (date.trim() === '' || category.trim() === '' || amount.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }
    // Parse amount to float
    const parsedAmount = parseFloat(amount);
    // Submit transaction
    onSubmit({ date, category, amount: parsedAmount });
    // Clear form fields
    setDate('');
    setCategory('');
    setAmount('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="date"
        placeholder="Date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TransactionForm;
