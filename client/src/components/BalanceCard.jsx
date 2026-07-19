import { FaWallet } from "react-icons/fa";

function BalanceCard({ balance }) {
  return (
    <div className="balance-card">
      <FaWallet size={35} color="white" />
      <h2>Current Balance</h2>
      <h1>₹{balance}</h1>
    </div>
  );
}

export default BalanceCard;