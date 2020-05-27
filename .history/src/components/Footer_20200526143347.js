import React from "react";

import Container from "components/Container";

const Footer = () => {
  return (
    <footer>
      <Container>
        <p className="logo">
          <Link to="/">
            <img src={logo} alt="mtor.io" />
          </Link>
        </p>
        <p>&copy; 2020, mtor.io</p>
      </Container>
    </footer>
  );
};

export default Footer;
