import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = ({ isActive }) =>
    "nav-link " + (isActive ? "fw-bold text-white" : "text-white");

  return (
    <nav className="navbar navbar-expand-lg bg-primary">
      <div className="container">

        <span className="navbar-brand text-white">
          Product Store
        </span>

        <div className="navbar-nav ms-auto">

          <NavLink to="/" className={linkStyle}>
            Store
          </NavLink>

          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>

          <NavLink to="/contact" className={linkStyle}>
            Contact
          </NavLink>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
