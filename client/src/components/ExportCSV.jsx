function ExportCSV({ transactions }) {

  const exportToCSV = () => {
    const headers = "Description,Amount,Type,Date\n";

    const rows = transactions.map(function(item) {
  return item.description + "," +
         item.amount + "," +
         item.type + "," +
         item.date;
}).join("\n");

    const csvContent = headers + rows;

    const blob = new Blob([csvContent], {
      type: "text/csv",
    });

    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = "transactions.csv";
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <div>
      <button className="export-btn" onClick={exportToCSV}>
        Export to CSV
      </button>
    </div>
  );
}

export default ExportCSV;