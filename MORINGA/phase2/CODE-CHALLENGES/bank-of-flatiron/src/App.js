import './App.css';
import React from 'react';
import Transactions from './COMPONENTS/Transactions';
import NewItemForm from './COMPONENTS/NewItemForm';
import SearchForm from './COMPONENTS/SearchForm';
import transactions from "./transactions";


function App() {
  // Remove the state and useEffect related to fetching data

  function handleUpdateOnSubmission(newTransaction) {
    // Update the transactions array directly here
    transactions.push(newTransaction);
    console.log("New transaction added:", newTransaction);
  }

  function handleOnSearching(search) {
    // Filtering the transactions array based on search
    // You can implement your search logic here if needed
    console.log("Search query:", search);
  }

  return (
    <div className="ui raise segment">
      <div className='header-text'>
        <h2>The Bank of Flatiron</h2>
      </div>
      <SearchForm onSearching={handleOnSearching} />
      <NewItemForm onSubmission={handleUpdateOnSubmission} />
      <Transactions transactions={transactions} /> {/* Pass transactions array as prop */}
    </div>
  );
}

export default App;
