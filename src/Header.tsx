import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <div>
        <div id="logo-header">Logo</div>
        <div id="nav-header">
          <NavLink to={`/`}>Home</NavLink>
          <NavLink to={`/shop`}>Shop</NavLink>
        </div>
      </div>
    </>
  );
}
