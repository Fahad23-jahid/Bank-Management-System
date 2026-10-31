import TransactionItem from "../components/TransactionItem";
function Transactions({ transactions }) {
  return (
    <div className="container">
      <h1>Transaction History</h1>
      {transactions.length === 0 ? (
        <h3>No Transactions Available</h3>
      ) : (
        transactions.map((transaction) => (
          <TransactionItem key={transaction.id} transaction={transaction} />
        ))
      )}
    </div>
  );
}
export default Transactions;
