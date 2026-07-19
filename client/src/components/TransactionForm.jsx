import { useState } from "react";

function TransactionForm({
  balance,
  setBalance,
  income,
  setIncome,
  expense,
  setExpense,
  transactions,
  setTransactions,
}) {
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("Others");

  const addIncome = () => {
    const value = Number(amount);
    setIncome(income + value);
    setBalance(balance + value);
    setTransactions([
    ...transactions,
    {
      description,
      amount: value,
      type: "Income",
      category,
      date: new Date().toLocaleString(),
    },
]);
    setDescription("");
    setAmount("");
  };

  const addExpense = () => {
    const value = Number(amount);
    setExpense(expense + value);
    setBalance(balance - value);
    setTransactions([
    ...transactions,
    {
      description,
      amount: value,
      type: "Expense",
      category,
      date: new Date().toLocaleString(),
    },
  ]);

    setDescription("");
    setAmount("");
  };

  return (
  <div className="transaction-form">
    <h2>Add Transaction</h2>

    <input
      type="text"
      placeholder="Enter description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />

    <input
      type="number"
      placeholder="Enter amount"
      value={amount}
      onChange={(e) => setAmount(e.target.value)}
    />

    <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  >
  <option value="Salary">💰 Salary</option>
  <option value="Food">🍔 Food</option>
  <option value="Travel">🚗 Travel</option>
  <option value="Shopping">🛒 Shopping</option>
  <option value="Bills">💡 Bills</option>
  <option value="Entertainment">🎬 Entertainment</option>
  <option value="Others">📦 Others</option>
  </select>

    <br />
    <br />

    <button className="income-btn" onClick={addIncome}>
      Add Income
    </button>
    <button className="expense-btn" onClick={addExpense}>
      Add Expense
    </button>
  </div>
);
}

export default TransactionForm;
