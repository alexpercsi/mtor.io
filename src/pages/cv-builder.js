import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from 'components/Layout';
import Container from 'components/Container';
import organizing from 'assets/images/illustration-organizing-ideas.png';
import { Link } from 'gatsby';

const generateCV = () => {
  alert(1);
};

const CVBuilderPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>mtor.io - a community for mentors and mentees</title>
      </Helmet>
      <section className="welcome">
        <Container>
          <div className="welcomeText">
            <h4 className="tagline">mtor.io</h4>
            <h1 className="title dark">
              CV Builder
            </h1>
            <h3 className="subtitle dark">
              To get started, choose what type of resume you would like to have, and what it should include
            </h3>
          </div>
          <div className="welcomeActions">
            <Link to="#form" className="btn primary">
              Get started
            </Link>
          </div>
        </Container>
      </section>

      <Container>
        <div className="form" id="form">
          <p className="subtitle white">
            <span className="formLabel">CV Format </span>
            <input type="radio" name="format" checked="checked" /> Compact
            <input type="radio" name="format" /> Extended
          </p>
          <p className="subtitle white">
            <span className="formLabel">Include a sidebar? </span>
            <input type="radio" name="sidebar" checked="checked" /> Yes
            <input type="radio" name="sidebar" /> No
          </p>
          <p className="subtitle white">
            <span className="formLabel">Include a photo </span>
            <input type="radio" name="photo" checked="checked" /> Yes
            <input type="radio" name="photo" /> No
          </p>
          <p className="subtitle white">
            <span className="formLabel">Choose a color scheme </span><br />
            <input type="radio" name="style" checked="checked" /> <img src="assets/images/cv-themes/plain.png" />
            <input type="radio" name="style" checked="checked" /> <img src="assets/images/cv-themes/blue.png" />
            <input type="radio" name="style" checked="checked" /> <img src="assets/images/cv-themes/green.png" />
            <input type="radio" name="style" checked="checked" /> <img src="assets/images/cv-themes/tan.png" />
          </p>
          {/* <Button onClick={()=>{generateCV()}}  className="btn primary">
              Build my CV!
          </Button> */}
        </div>
      </Container>

      
      <div className="communityWrapper" id="community">
        <Container>
          <div className="community">
            <div className="community-content">
              <div className="comunity-txt">
                <h3>
                  By clicking "Build my CV" you agree to our Terms of Service and Privacy Policy. 
                </h3>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="flex-center organizing">
          <img src={organizing} alt="" width="332" />
        </div>
      </Container>

      <div className="mtor-numbers diagonal-line">
        <svg
          className="seperator"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon class="fill-white" points="2560 0 0 0 0 100"></polygon>
        </svg>
        <Container>
        </Container>
      </div>
    </Layout>
  );
};

export default CVBuilderPage;
