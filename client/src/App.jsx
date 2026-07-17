import './App.css';
import Header from './components/Header';
import BalanceCard from './components/BalanceCard';
import IncomeExpenseCard from './components/IncomeExpenseCard';
function App() {
  return (
    <div>
      <Header />
      <BalanceCard />
      <IncomeExpenseCard />
    </div>
  );
}

export default App;