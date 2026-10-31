function TransactionItem({ transaction }) {
  return (
    <div className="transaction">
      <h3>{transaction.type}</h3>
      <p>Amount: ৳ {transaction.amount}</p>
      <p>Date: {transaction.date}</p>
    </div>
  );
}
export default TransactionItem;
