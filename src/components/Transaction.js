import React, { useState } from 'react';
import './Transaction.css';
import TransactionCell from './TransactionCell';

const Transaction = (props) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTransactions = props.transanction.filter((transaction) => {
    return transaction.desc.toLowerCase().includes(searchQuery.toLowerCase().trim());
  });

  return (
    <div className='cont'>
      Transactions
      <input placeholder='Search' value={searchQuery} onChange={handleSearch} />

      {filteredTransactions.length ? (
        filteredTransactions.map((payload) => <TransactionCell payload={payload} />)
      ) : (
        <p>No transactions found.</p>
      )}
    </div>
  );
};

export default Transaction;
