import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function ExpenseChart({ income, expense }) {
  const data = {
    labels: ["Income", "Expense"],
    datasets: [
      {
        data: [income, expense],
        backgroundColor: ["green", "red"],
      },
    ],
  };

  return (
    <div
      style={{
        width: "350px",
        margin: "20px auto",
      }}
    >
      <h2>Expense Chart</h2>
      <Pie data={data} />
    </div>
  );
}

export default ExpenseChart;