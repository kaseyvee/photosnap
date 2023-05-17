import { Link } from "react-router-dom";

import Button from "./Button";

import { ReactComponent as Logo } from "../assets/logo.svg";

import pageLinks from "../helpers/links/pageLinks";
import socialLinks from "../helpers/links/socialLinks";

function Footer() {
  const socialsList = socialLinks.map((social) => {
    return (
      <Link to="" aria-label={`${social.name} link`} key={social.name}>
        {social.logo}
      </Link>
    );
  });

  const pagesList = pageLinks.map((page) => {
    return (
      <li key={page + "footer"} className="footer-item">
        <Link to={`/${page}`}>{page.toUpperCase()}</Link>
      </li>
    );
  });

  return (
    <footer className="footer">
      <div className="wrapper">
        <div className="footer_left">
          <Link to="/" className="footer_left_logo">
            <Logo fill="white" />
          </Link>
          <div className="footer_left_socials">{socialsList}</div>
          <ul className="footer_left_links">
            <li className="footer-item">
              <Link to="/">HOME</Link>
            </li>
            {pagesList}
          </ul>
        </div>
        <div className="footer_right">
          <Button text="GET AN INVITE" colour="white" />
          <p>Copyright 2019. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
