import React, { useState } from "react";
import "./ExpenseManager.css"; // Import the CSS file

const ExpenseManager = () => {
  const [transactions, setTransactions] = useState([]);
  const [formData, setFormData] = useState({
    type: "Expense",
    category: "",
    amount: "",
    description: "",
    date: "",
    expenseType: "Monthly" // Default expense type
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTransactions((prevTransactions) => [
      ...prevTransactions,
      { id: Date.now(), ...formData }
    ]);
    setFormData({
      type: "Expense",
      category: "",
      amount: "",
      description: "",
      date: "",
      expenseType: "Monthly" // Reset to default
    });
  };

  const handleDelete = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  const handlePrint = () => {
    const printContent = document.getElementById("print-area").innerHTML;
    const newWindow = window.open("", "_blank");
    newWindow.document.write(`
      <html>
        <head>
          <title>Print</title>
          <link rel="stylesheet" href="./ExpenseManager.css">
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);
    newWindow.document.close();
    newWindow.print();
  };

  const totalIncome = transactions
    .filter(t => t.category === "Salary")
    .reduce((acc, t) => acc + parseFloat(t.amount), 0);

  const totalExpense = transactions
    .filter(t => t.category === "Expense")
    .reduce((acc, t) => acc + parseFloat(t.amount), 0);

  const remainingSavings = totalIncome - totalExpense;

  return (
    <div className="expense-manager-container">
      <header>
        <h1>Expense Manager</h1>
      </header>

      {/* Form to Add Expenses and Income */}
      <section className="add-transaction">
        <h2>FILL DETAILS</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="expenseType">Expense Frequency:</label>
            <select name="expenseType" value={formData.expenseType} onChange={handleChange}>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Annually">Annually</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="category">Category:</label>
            <select name="category" value={formData.category} onChange={handleChange}>
              <option value="">Select</option>
              <option value="Expense">Expenses</option>
              <option value="Salary">Salary</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="amount">Amount:</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              placeholder="₹1,000"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              name="description"
              value={formData.description}
              placeholder="Food, Transport, Entertainment, Others"
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input
              type="date"
              name="date"
              value={formData.date}
              required
              onChange={handleChange}
            />
          </div>

          <button type="submit">Add Transaction</button>
        </form>
      </section>

      {/* Transaction List as Table */}
      <section className="transactions">
        <h2>Transactions</h2>
        <div id="print-area">
          <table id="transaction-table">
            <thead>
              <tr>
                <th>Amount</th>
                <th>Category</th>
                <th>Frequency</th>
                <th>Date</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td>₹{transaction.amount}</td>
                  <td>{transaction.category}</td>
                  <td>{transaction.expenseType}</td> {/* Displaying Frequency */}
                  <td>{transaction.date}</td>
                  <td>{transaction.description}</td>
                  <td>
                    <button onClick={() => handleDelete(transaction.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Summary Selector */}
      <section className="summary-options">
        <h2>View Summary</h2>
        <div id="summary-output">
          <table>
            <thead>
              <tr>
                <th>Total Income</th>
                <th>Total Expense</th>
                <th>Remaining Savings</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id="total-income">₹{totalIncome}</td>
                <td id="total-expense">₹{totalExpense}</td>
                <td id="remaining-savings">₹{remainingSavings}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Print Button */}
      <button id="print-btn" onClick={handlePrint}>Print 🖨</button>
    </div>
  );
};

export default ExpenseManager;
