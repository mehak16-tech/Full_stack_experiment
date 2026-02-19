import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Navbar() {
  const { state } = useContext(AppContext);

  const linkStyle = ({ isActive }) =>
    "nav-link mx-2 " +
    (isActive ? "fw-bold text-warning" : "text-white");

  return (
    <nav className="navbar navbar-expand-lg shadow-sm" style={{ background: "#4f46e5" }}>
      <div className="container">

        <span className="navbar-brand text-white fw-bold">
          🛍 Product Store
        </span>

        <div className="navbar-nav ms-auto align-items-center">

          <NavLink to="/" className={linkStyle}>
            Store
          </NavLink>

          <NavLink to="/about" className={linkStyle}>
            About
          </NavLink>

          <NavLink to="/contact" className={linkStyle}>
            Contact
          </NavLink>

          <NavLink to="/tasks" className={linkStyle}>
            Tasks
          </NavLink>

          <span className="badge bg-warning text-dark ms-3">
            Tasks: {state.tasks.length}
          </span>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
