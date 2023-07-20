import "./index.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-left-container">
        <img
          className="logo-image"
          src="https://res.cloudinary.com/didtdrgsj/image/upload/v1689587559/WhatsApp_Image_2023-07-17_at_3.13.56_PM-removebg-preview_etbvpo.png"
          alt="logo"
        />
        {/* <a href="/" className="link">
          Sameer
        </a> */}
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
