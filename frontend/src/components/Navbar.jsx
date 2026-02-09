import React from "react";
import "../App.css"
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav__logo">AMAR&Co</div>
        <ul className="nav__links">
          <li className="link">
            <a href="#">Home</a>
          </li>
          <li className="link">
            <a href="#">Book</a>
          </li>
          <li className="link">
            <a href="#">Blog</a>
          </li>
          <li className="link">
            <a href="#">Contact Us</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
