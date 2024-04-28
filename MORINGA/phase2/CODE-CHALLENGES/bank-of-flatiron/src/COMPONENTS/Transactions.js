import React, { useState } from "react";
import TransactionItem from "./TransactionItem";
import transactions from "../transactions";

function Transactions() {
  // State to store the list of transactions
  const [transactions, setTransactions] = useState([
    // Initial transactions data
    {
      id: 1,
      date: "13/Apr/2024",
      description: "Movies",
      category: "Income",
      amount: "5000"
    },
    // Add more initial transactions as needed
  ]);

    //Add more
  

  // State to store form input values
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form inputs (not shown here)

    // Add new transaction to the list
    const newTransaction = {
      id: transactions.length + 1,
      ...formData
    };
    setTransactions([...transactions, newTransaction]);

    // Reset form data
    setFormData({
      date: "",
      description: "",
      category: "",
      amount: ""
    });
  };
  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };
  return (
    <div>
      <h2>Transactions</h2>
      <table>
        <tbody>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
          {/* Render existing transactions */}
          {transactions.map((transaction) => (
            <TransactionItem key={transaction.id} transaction={transaction} />
          ))}
          {/* Form for adding new transaction */}
          <tr>
            <td>
              <input
                type="text"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <input
                type="text"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
              />
            </td>
            <td>
              <button onClick={handleSubmit}>Add Transaction</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
