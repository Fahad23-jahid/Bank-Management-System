import { useState, useRef } from "react";
function Withdraw({
  balance,
  setBalance,
  totalWithdraw,
  setTotalWithdraw,
  transactions,
  setTransactions,
}) {
  const [amount, setAmount] = useState("");
  const [message, setMessage] = useState("");
  const inputRef = useRef(null);
  function handleWithdraw(e) {
    e.preventDefault();

    const money = Number(amount);
    if (amount === "" || money <= 0 || !Number.isFinite(money)) {
      setMessage("Please enter a valid amount");
      return;
    }
    if (money > balance) {
      setMessage("Insufficient Balance!");
      return;
    }
    setBalance(balance - money);
    setTotalWithdraw(totalWithdraw + money);
    const newTransaction = {
      id: Date.now(),
      type: "Withdraw",
      amount: money,
      date: new Date().toLocaleString(),
    };
    setTransactions([...transactions, newTransaction]);
    setMessage("Money withdrawn successfully!");
    setAmount("");
    inputRef.current.focus();
  }
  return (
    <div className="container">
      <h1>Withdraw Money</h1>
      <h3>Current Balance: {balance}</h3>
      <form onSubmit={handleWithdraw}>
        <input
          ref={inputRef}
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Withdraw</button>
      </form>

      <p>{message}</p>
    </div>
  );
}
export default Withdraw;
