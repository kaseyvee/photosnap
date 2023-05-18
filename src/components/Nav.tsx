import { useState, useRef } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import logo from "../assets/logo.svg";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import Button from "./Button";

import pageLinks from "../helpers/links/pageLinks";
import { motion, AnimatePresence } from "framer-motion";

function Nav() {
  const [navOpen, setNavOpen] = useState(false);
  const isDesktop = useMediaQuery({ query: "(min-width: 768px)" });
  const clickRef = useRef<any>(null);

  function handleToggleMenu() {
    setNavOpen(!navOpen);
  }

  function handleOutsideMenuClick(e: any) {
    if (!clickRef.current.contains(e.target)) {
      setNavOpen(false);
    }
  }

  addEventListener("click", handleOutsideMenuClick, true);
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
      <AnimatePresence>
        {navOpen &&
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }} className="overlay"
          ></motion.div>}
      </AnimatePresence>
      <nav className="nav" ref={clickRef}>
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
        </div>
        <AnimatePresence>
          {navOpen && 
            <motion.div
              className="nav_list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, y: [-200, 0] }}
              exit={{ opacity: 0, y: [0, -200] }}
            >
              {navItems}
            </motion.div>
          }
        </AnimatePresence>
      </nav>
    </>
  );
}

export default Nav;
