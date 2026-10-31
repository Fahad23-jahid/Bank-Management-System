import { NavLink } from "react-router-dom";
function Navbar() {
  return (
    <nav>
      <h2>My Bank</h2>
      <NavLink to="/">Dashboard</NavLink>
      <NavLink to="/deposit">Deposit</NavLink>
      <NavLink to="/withdraw">Withdraw</NavLink>
      <NavLink to="/transactions">Transactions</NavLink>
    </nav>
  );
}
export default Navbar;
