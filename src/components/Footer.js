import React from "react";
import { Link } from "gatsby";
import Container from "components/Container";
import logo from "assets/images/logo.png";
import twitter from "assets/images/social-twitter.png";
import insta from "assets/images/social-insta.png";
import facebook from "assets/images/social-facebook.png";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <Container>
        <div className="footerWrapper">
          <div className="logo_copyrights">
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
                <Link to="/terms&conditions">Terms/Conditions</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/imprint">Imprint</Link>
              </li>
            </ul>
          </div>

          <div ClassName="social-links">
            <ul>
              <li aria label="twitter-social-media">
                <a href="/" title="twitter-social-media" target="blank">
                  <img src={twitter} alt="twitter-social-media" />
                </a>
              </li>
              <li aria label="facebook-social-media">
                <a href="/" title="facebook-social-media" target="blank">
                  <img src={facebook} alt="facebook-social-media" />
                </a>
              </li>
              <li aria-label="instagram-social-media">
                <a href="/" title="instagram-social-media" target="blank">
                  <img src={insta} alt="instagram-social-media" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
