import React from "react";
import { Link } from "gatsby";
import Container from "components/Container";
import logo from "assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <Container>
        <div ClassName="logo_copyrights">
          <span className="logo">
            <Link to="/">
              <img src={logo} alt="mtor.io" />
            </Link>
          </span>
          <p>&copy; 2020, mtor.io</p>
        </div>
        <div className="links">
          <ul>
            <li>
              <Link to="#">Terms/Conditions</Link>
            </li>
            <li>
              <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/privacy">Imprint</Link>
            </li>
          </ul>
        </div>
        <div ClassName="social-links">
          <ul>
            <li>
              <a href="#" title="twitter-social-media" target="blank">
                <img src="../assets/images/social-twitter.png" />
              </a>
            </li>
            <li>
              <a href="#" title="facebook-social-media" target="blank">
                <img src="./assets/images/social-facebook.png"
                  alt="facebook-social-media"/>
              </a>
            </li>
            <li>
              <a href="#" title="instagram-social-media">
                <img
                  src="../assets/images/instagram.svg"
                  alt="instagram-social-media"
                />
              </a>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
};

   

export default Footer;
