import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";

function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' });

  function handleToggleMenu() {
    setNavOpen(!navOpen);
  }

  return (
    <nav className="nav">
      <div className="nav_main">
        <Link to="/" className="logo">
          <img src={logo} alt="logo and go to home" />
        </Link>
        {!isDesktop && <button
          aria-expanded={navOpen ? "true" : "false"}
          className="toggle-menu"
          onClick={handleToggleMenu}
        >
          <img
            src={navOpen ? close : menu}
            alt={navOpen ? "close menu" : "open menu"}
          />
        </button>}
      </div>
      {isDesktop && <>
        <ul>
          <li className="nav-item">
            <a href="/stories">STORIES</a>
          </li>
          <li className="nav-item">
            <a href="/features">FEATURES</a>
          </li>
          <li className="nav-item">
            <a href="/pricing">PRICING</a>
          </li>
        </ul>
        <button className="button button_black_border">GET AN INVITE</button>
      </>}
      {navOpen && <div className="nav_list">
        <ul>
          <li className="nav-item">
            <a href="/stories">STORIES</a>
          </li>
          <li className="nav-item">
            <a href="/features">FEATURES</a>
          </li>
          <li className="nav-item">
            <a href="/pricing">PRICING</a>
          </li>
        </ul>
        <button className="button button_black_border">GET AN INVITE</button>
      </div>}
      <div className="overlay"></div>
    </nav>
  );
}

export default Nav;
