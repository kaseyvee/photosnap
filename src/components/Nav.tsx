import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { useState } from "react";

function Nav() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav>
      <Link to="/">
        <img src={logo} alt="logo and go to home" />
      </Link>
      <button aria-expanded={navOpen ? "true" : "false"} className="toggle-menu">
        <img src={navOpen ? close : menu} alt={navOpen ? "close menu" : "open menu"} />
      </button>
      <div>
        <ul>
          <li>
            <a href="/stories">STORIES</a>
          </li>
          <li>
            <a href="/features">FEATURES</a>
          </li>
          <li>
            <a href="/pricing">PRICING</a>
          </li>
        </ul>
        <button className="button button_black_border">GET AN INVITE</button>
      </div>
    </nav>
  );
}

export default Nav;