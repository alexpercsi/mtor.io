import React from "react";

import Container from "components/Container";
mport logo from "assets/images/logo.png";

const Footer = () => {
  return (
    <footer>
      <Container>
        <p>&copy; 2020, mtor.io</p>
        <p className="logo">
          <Link to="/">
            <img src={logo} alt="mtor.io" />
          </Link>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
