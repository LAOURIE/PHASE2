import React from "react";

function TransactionItem({ transaction }) {
  // Check if transaction is undefined or null
  if (!transaction) {
    return null; // Return null if transaction is not provided
  }

  return (
    <tr>
      <td>{transaction.date }</td>
      <td>{transaction.description }|| "</td>
      <td>{transaction.category }</td>
      <td>{transaction.amount  }</td>
    </tr>
  );
}

export default TransactionItem;
