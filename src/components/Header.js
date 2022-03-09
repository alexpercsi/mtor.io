import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';
import logo from 'assets/images/logo.png';

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
          <nav className="desktop">
            <ul>
              <li>
                <Link to="/signup">join</Link>
              </li>
              <li>
                <Link to="/mentors">mentors</Link>
              </li>
              <li>
                <Link to="/about-us">about us</Link>
              </li>
              <li>
                <Link to="/cv-builder">cv builder</Link>
              </li>
            </ul>
          </nav>
          <nav className="mobile">
            <ul>
              <li>
                <Link to="/signup">join</Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;
