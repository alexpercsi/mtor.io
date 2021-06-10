import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from 'components/Layout';
import Container from 'components/Container';
import organizing from 'assets/images/illustration-organizing-ideas.png';
import cvThemeBlack from 'assets/images/cv-themes/black.png';
import cvThemeTeal from 'assets/images/cv-themes/teal.png';
import { Link } from 'gatsby';

const NotFoundPage = () => {

  return (
    <Layout pageName="home">
      <Helmet>
        <title>mtor.io - page not found</title>
      </Helmet>
      <section className="welcome">
        <Container>
          <div className="welcomeText">
            <h4 className="tagline">Page Not Found</h4>
            <h1 className="title dark">
              Oop! That wasn't meant to happen!
            </h1>
            <h3 className="subtitle dark">
              Maybe we need a new mentor... Why don't you <Link to="/signup">Join Us</Link> and tell us what we can do better?
            </h3>
          </div>

        </Container>
      </section>

      
      <div className="communityWrapper" id="community">
        <Container>
          <div className="community">
            <div className="community-content">
              <div className="comunity-txt">
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

export default NotFoundPage;
