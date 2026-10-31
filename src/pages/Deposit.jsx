import { useState, useRef } from "react";
function Deposit({
  balance,
  setBalance,
  totalDeposit,
  setTotalDeposit,
  transactions,
  setTransactions,
}) {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);
  function handleDeposit(e) {
    e.preventDefault();
    const money = Number(amount);
    if (amount === "" || money <= 0 || !Number.isFinite(money)) {
      setMessage("Please enter a valid amount");
      return;
    }
    setBalance(balance + money);
    setTotalDeposit(totalDeposit + money);
    const newTransaction = {
      id: Date.now(),
      type: "Deposit",
      amount: money,
      date: new Date().toLocaleString(),
    };
    setTransactions([...transactions, newTransaction]);
    setMessage("Money deposited successfully!");
    setAmount("");
    inputRef.current.focus();
  }
  return (
    <div className="container">
      <h1>Deposit Money</h1>
      <h3>Current Balance: {balance}</h3>
      <form onSubmit={handleDeposit}>
        <input
          ref={inputRef}
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Deposit</button>
      </form>
      <p>{message}</p>
    </div>
  );
}
export default Deposit;
