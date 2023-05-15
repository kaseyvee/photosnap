import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import Button from "./Button";

import pageLinks from "../helpers/links/pageLinks";

function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });

  function handleToggleMenu() {
    setNavOpen(!navOpen);
  }

  addEventListener("resize", () => {
    setNavOpen(false);
  });

  const pagesList = pageLinks.map((page) => {
    return (
      <li key={page + "nav"} className="nav-item">
        <Link to={`/${page}`}>{page.toUpperCase()}</Link>
      </li>
    );
  });

  const navItems = (
    <>
      <ul>{pagesList}</ul>
      <Button
        className="nav-button"
        text="GET AN INVITE"
        colour="black"
        border={true}
      />
    </>
  );

  return (
    <>
      {navOpen && <div className="overlay"></div>}
      <nav className="nav">
        <div className="wrapper">
          <div className="nav_main">
            <Link to="/" className="logo">
              <img src={logo} alt="logo and go to home" />
            </Link>
            {!isDesktop && (
              <button
                aria-expanded={navOpen ? "true" : "false"}
                className="toggle-menu"
                onClick={handleToggleMenu}
              >
                <img
                  src={navOpen ? close : menu}
                  alt={navOpen ? "close menu" : "open menu"}
                />
              </button>
            )}
          </div>
          {isDesktop && navItems}
          {navOpen && <div className="nav_list">{navItems}</div>}
        </div>
      </nav>
    </>
  );
}

export default Nav;
