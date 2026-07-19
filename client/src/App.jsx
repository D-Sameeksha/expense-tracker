import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import BalanceCard from "./components/BalanceCard";
import IncomeExpenseCard from "./components/IncomeExpenseCard";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import ExpenseChart from "./components/ExpenseChart";
import ExportCSV from "./components/ExportCSV";

function App() {
  const [balance, setBalance] = useState(0);
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const [search, setSearch] = useState("");
  const [transactions, setTransactions] = useState(() => {
  const saved = localStorage.getItem("transactions");

  return saved ? JSON.parse(saved) : [];
});
const [filter, setFilter] = useState("All");
const [editIndex, setEditIndex] = useState(null);
const [editTransaction, setEditTransaction] = useState(null);
const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    const savedTransactions = JSON.parse(
      localStorage.getItem("transactions")
    );

    if (savedTransactions) {
      setTransactions(savedTransactions);

      let incomeTotal = 0;
      let expenseTotal = 0;

      savedTransactions.forEach((item) => {
        if (item.type === "Income") {
          incomeTotal += item.amount;
        } else {
          expenseTotal += item.amount;
        }
      });

      setIncome(incomeTotal);
      setExpense(expenseTotal);
      setBalance(incomeTotal - expenseTotal);
    }
  }, []);

  
  useEffect(() => {
  localStorage.setItem(
    "transactions",
    JSON.stringify(transactions)
  );
}, [transactions]);
const deleteTransaction = (index) => {
  const transaction = transactions[index];

  let updatedIncome = income;
  let updatedExpense = expense;

  if (transaction.type === "Income") {
    updatedIncome -= transaction.amount;
  } else {
    updatedExpense -= transaction.amount;
  }

  setIncome(updatedIncome);
  setExpense(updatedExpense);
  setBalance(updatedIncome - updatedExpense);

  const updatedTransactions = transactions.filter((_, i) => i !== index);
  setTransactions(updatedTransactions);
};

const handleEditTransaction = (index) => {
  alert("Editing transaction: " + transactions[index].description);
};

  return (
    <div className={darkMode ? "App dark" : "App"}>
      <Header />
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>

      <BalanceCard balance={balance} />

      <IncomeExpenseCard
        income={income}
        expense={expense}
      />

      <TransactionForm
        balance={balance}
        setBalance={setBalance}
        income={income}
        setIncome={setIncome}
        expense={expense}
        setExpense={setExpense}
        transactions={transactions}
        setTransactions={setTransactions}
      />

      <TransactionList
        transactions={transactions}
        deleteTransaction={deleteTransaction}
        editTransaction={handleEditTransaction}
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
      />
      <ExpenseChart
      income={income}
      expense={expense}
      />
      <ExportCSV transactions={transactions} />
    </div>
  );
}

export default App;