function TransactionList({
  transactions,
  deleteTransaction,
  editTransaction,
  filter,
  setFilter,
  search,
  setSearch,
}) {
  const filteredTransactions = transactions.filter((item) => {
  const matchesFilter =
    filter === "All" || item.type === filter;

  const matchesSearch =
    item.description
      .toLowerCase()
      .includes(search.toLowerCase());

  return matchesFilter && matchesSearch;
});

  return (
    <div className="transaction-list">
      <h2>Transaction History</h2>

      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Income")}>Income</button>
        <button onClick={() => setFilter("Expense")}>Expense</button>
      </div>
      <input
      type="text"
      placeholder="🔍 Search transactions..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />

      {filteredTransactions.length === 0 ? (
        <p>No transactions found</p>
      ) : (
        filteredTransactions.map((item, index) => (
          <div
            key={index}
            className={`transaction-item ${
              item.type === "Income"
                ? "income-item"
                : "expense-item"
            }`}
          >
            <span>{item.description}</span>

            <div>
              <strong>₹{item.amount}</strong> ({item.type})
              <br />
              <small>Category: {item.category}</small>
              <br />

              <small>{item.date}</small>
            </div>

            <div>
              <button
              className="edit-btn"
              onClick={() => editTransaction(index)}
              >
                Edit
              </button>
              <button
                className="delete-btn"
                onClick={() => deleteTransaction(index)}
                >
                Delete
              </button>
                  </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TransactionList;