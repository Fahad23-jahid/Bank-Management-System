import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Deposit from "./pages/Deposit";
import Withdraw from "./pages/Withdraw";
import Transactions from "./pages/Transactions";
function App() {
  const [balance, setBalance] = useState(() => {
    return Number(localStorage.getItem("balance")) || 5000;
  });
  const [totalDeposit, setTotalDeposit] = useState(() => {
    return Number(localStorage.getItem("totalDeposit")) || 0;
  });
  const [totalWithdraw, setTotalWithdraw] = useState(() => {
    return Number(localStorage.getItem("totalWithdraw")) || 0;
  });
  const [transactions, setTransactions] = useState(() => {
    return JSON.parse(localStorage.getItem("transactions")) || [];
  });
  useEffect(() => {
    localStorage.setItem("balance", balance);
    localStorage.setItem("transactions", JSON.stringify(transactions));
    localStorage.setItem("totalDeposit", totalDeposit);
    localStorage.setItem("totalWithdraw", totalWithdraw);
  }, [balance, transactions, totalDeposit, totalWithdraw]);
  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Dashboard
              balance={balance}
              totalDeposit={totalDeposit}
              totalWithdraw={totalWithdraw}
            />
          }
        />
        <Route
          path="/deposit"
          element={
            <Deposit
              balance={balance}
              setBalance={setBalance}
              totalDeposit={totalDeposit}
              setTotalDeposit={setTotalDeposit}
              transactions={transactions}
              setTransactions={setTransactions}
            />
          }
        />
        <Route
          path="/withdraw"
          element={
            <Withdraw
              balance={balance}
              setBalance={setBalance}
              totalWithdraw={totalWithdraw}
              setTotalWithdraw={setTotalWithdraw}
              transactions={transactions}
              setTransactions={setTransactions}
            />
          }
        />
        <Route
          path="/transactions"
          element={<Transactions transactions={transactions} />}
        />
      </Routes>
    </>
  );
}
export default App;
