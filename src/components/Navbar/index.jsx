import "./index.scss";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left-container">
        <a href="/" className="logo-name">
          Sameer
        </a>
      </div>
      <div className="navbar-links-container">
        <a className="link" href="/about">
          About
        </a>
        <a className="link" href="/contact">
          Resources
        </a>
      </div>
    </div>
  );
};

export default Navbar;
