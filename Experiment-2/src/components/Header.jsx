function Header({ cartCount }) {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <div className="container">
        <span className="navbar-brand">
          Product Store
        </span>

        <span className="badge bg-light text-dark">
          Cart: {cartCount}
        </span>
      </div>
    </nav>
  );
}

export default Header;
