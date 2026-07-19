import { FaArrowUp, FaArrowDown } from "react-icons/fa";

function IncomeExpenseCard({ income, expense }) {
  return (
    <div className="income-expense">
      <div className="income-box">
        <FaArrowUp size={28} color="green" />
        <h3>Income</h3>
        <h2>₹{income}</h2>
      </div>

      <div className="expense-box">
        <FaArrowDown size={28} color="red" />
        <h3>Expense</h3>
        <h2>₹{expense}</h2>
      </div>
    </div>
  );
}

export default IncomeExpenseCard;