import React from "react";
import { Link } from "gatsby";

import Container from "components/Container";
import logo from "assets/images/logo.png";

const Header = () => {
  return (
    <header>
      <Container>
        <div className="headerWrapper">
          <p className="logo">
            <Link to="/">
              <img src={logo} alt="mtor.io" />
            </Link>
          </p>
          <nav id="navbar" className="desktop">
            <ul>
              <li>
                <Link to="#">join</Link>
              </li>
              <li>
                <Link to="#">how it works</Link>
              </li>
              <li>
                <Link to="#">community</Link>
              </li>
            </ul>
          </nav>
          <nav id="navbar" className="mobile">
            <ul>
              <li>
                <Link to="#">join</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
