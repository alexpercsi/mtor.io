import React from "react";
import { Link } from "gatsby";

import Container from "components/Container";
import logo from "assets/images/logo.png";

const Header = () => {
  return (
    <header className="main-head">
      <Container>
        <nav id="navbar">
          <p className="logo">
            <Link to="/">
              <img src={logo} alt="mtor.io" />
            </Link>
          </p>
          {/* <header class="main-head">
          <nav>
            <h1 id="logo">Travelly</h1>
            <ul>
              <li>
                <a href="#locations">Locations</a>
              </li>
              <li>
                <a href="#benefits">Benefits</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </nav>
        </header> */}

          <ul>
            <li>
              <Link to="#">join</Link>
            </li>
            <li>
              <Link to="/privacy">how it works</Link>
            </li>
            <li>
              <Link to="/privacy">community</Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
