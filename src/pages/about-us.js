import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from 'components/Layout';
import Container from 'components/Container';
import organizing from 'assets/images/illustration-organizing-ideas.png';
import { Link } from 'gatsby';

const AboutUsPage = () => {

  return (
    <Layout pageName="home">
      <Helmet>
        <title>mtor.io - about us</title>
      </Helmet>
      <section className="welcome">
        <Container>
          <div className="welcomeText">
            <h4 className="tagline">Nice to meet you!</h4>
            <h1 className="title dark">
              About us
            </h1>
            <h3>
              <p>We set out to create a safe space to make long lasting and meaningful connections with peers that could elevate knowledge and careers outside of immediate circles.</p>

              <p>In order to do this, we knew that mtor had to be different from all the other mentoring platforms out there.</p>

              <p>We understood that people have limited time on their hands and we try to promote interactions which require a smaller time investment than traditional mentorship platforms.</p> 

              <p>In a fast-paced professional environment, knowledge sharing needs to adapt to modern day constraints, and mtor helps reinvent this fundamental human interaction.</p>

              <p>Join the community today to see what we are all about.</p>
            </h3>
            <h3>
            <div className="joinButton">
              <Link to="/signup/" className="btn primary">
                I want to join!
              </Link>
            </div>
            </h3>
          </div>
        </Container>
      </section>

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

export default AboutUsPage;
