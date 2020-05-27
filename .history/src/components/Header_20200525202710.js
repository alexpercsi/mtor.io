import React from "react";
import { Link } from "gatsby";

import Container from "components/Container";
import logo from "assets/images/logo.png";

const Header = () => {
  return (
    <header>
      <Container>
        <p className="logo">
          <Link to="/">
            <img src={logo} alt="mtor.io" />
          </Link>
        </p>
        <ul>
          <li>
            <Link to="/">join</Link>
          </li>
          <li>
            <Link to="/privacy">how it works</Link>
          </li>
          <li>
            <Link to="/priva">community</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
