import React from "react";
import { Link } from "gatsby";
import Container from "components/Container";
import logo from "assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <Containerc>
        
        <span className="logo">
          <Link to="/">
            <img src={logo} alt="mtor.io" />
          </Link>
        </span>
        <p>&copy; 2020, mtor.io</p>
      </Containerc>
    </footer>
  );
};

    // <footer>
    //   <div class="footer-wrapper">
    //     <h5>hi &copy;</h5>
    //     <ul>
    //       <li>
    //         <a href="#" title="twitter-social-media"
    //           ><img src="./icons/twitter.svg" alt="twitter-social-media"
    //         /></a>
    //       </li>
    //       <li>
    //         <a href="#" title="youtube-social-media"
    //           ><img src="./icons/youtube.svg" alt="youtube-social-media"
    //         /></a>
    //       </li>
    //       <li>
    //         <a href="#" title="instagram-social-media"
    //           ><img src="./icons/instagram.svg" alt="instagram-social-media"
    //         /></a>
    //       </li>
    //     </ul>
    //   </div>

export default Footer;
