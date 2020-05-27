import React from "react";

import Container from "components/Container";

const Footer = () => {
  return (
    <footer>
      <Container>
        {/* <p>&copy; 2020, mtor.io</p> */}
        
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
      </Container>
    </footer>
  );
};

export default Footer;
