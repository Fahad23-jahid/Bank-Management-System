import BalanceCard from "../components/BalanceCard";
function Dashboard({ balance, totalDeposit, totalWithdraw }) {
  return (
    <div className="container">
      <h1>Welcome to My Bank</h1>
      <h3>Account Holder: Fahad</h3>
      <h3>Account Number: 123456789</h3>
      <div className="cards">
        <BalanceCard title="Current Balance" amount={balance} />
        <BalanceCard title="Total Deposit" amount={totalDeposit} />
        <BalanceCard title="Total Withdraw" amount={totalWithdraw} />
      </div>
    </div>
  );
}
export default Dashboard;
