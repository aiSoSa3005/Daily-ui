import "./Navbar.css";
import { useState } from "react";
const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="logo">Untitled UI</div>
      <div className="links">
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>About us</li>
        </ul>
        <div className="btns">
          <button className="btn">Log in</button>
          <button className="demo">View demo</button>
        </div>
      </div>
      <div onClick={()=> setShowMobileMenu(!showMobileMenu)} className="hamburger">&#9776;</div>
      <div className={`mobile-menu ${showMobileMenu ? 'active' : ''}`}>
        <ul>
          <li>Home</li>
          <li>Products</li>
          <li>Pricing</li>
          <li>Blog</li>
          <li>About us</li>
        </ul>
        <div className="btns">
          <button className="btn">Log in</button>
          <button className="demo">View demo</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
