import "./App.css";
import { GlobalProvider } from "./context/Context";
import TotalBalance from "./components/TotalBalance";
import NewTransaction from "./components/NewTransaction";
import IncomeExpenseForm from "./components/IncomeExpenseForm";
import { HistoryList } from "./components/HistoryList";
const App = () => {
  return (
    <GlobalProvider>
      <div className="App">
        <h1 className="heading">Expense Tracker</h1>
        <TotalBalance />
        <IncomeExpenseForm />
        <HistoryList/>
        <NewTransaction />
      </div>
    </GlobalProvider>
  );
};

export default App;
