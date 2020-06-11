import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from 'components/Layout';
import Container from 'components/Container';
import stepOne from 'assets/images/illustration1.png';
import stepTwo from 'assets/images/illustration2.png';
import stepThree from 'assets/images/illustration3.png';
import community from 'assets/images/illustration-community-desktop.png';
import organizing from 'assets/images/illustration-organizing-ideas.png';
import mentees from 'assets/images/mentees.png';
import intro from 'assets/images/icon-intro.png';
import members from 'assets/images/icon-total-members.png';
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <Layout pageName="home">
      <Helmet>
        <title>mtor.io</title>
      </Helmet>
      <section className="welcome">
        <Container>
          <div className="welcomeText">
            <h4 className="tagline">Mentorship Platform</h4>
            <h1 className="title dark">
              Get conected to your peers to learn or teach.
            </h1>
            <h3 className="subtitle dark">
              Join a network that curate professional conections.
            </h3>
          </div>
          <div className="welcomeActions">
            <Link to="/signup/" className="btn primary">
              I want to join!
            </Link>
            <a href="/" className="btn">
              About us.
            </a>
          </div>
        </Container>
      </section>

      <Container>
        <div className="mission">
          <h2 className="section-title">Mtor why and mission.</h2>
          <p className="subtitle white">
            <span className="greenHighlightStart">Our </span>
            mission is to make long lasting and meaningful connections with
            peers that can elevate your knowledge and career outside of your
            immediate circle.
          </p>
          <p>
            Finding a mentor can be difficult for some, approaching someone and
            asking for advice in not typically something we are taught to do,
            which is why at mtor we make the process as simple for you as
            possible - we exist to cut through the awkwardness and make real
            connections based on your goals, allowing you to teach or be taught
            in areas that interest you.
          </p>
          <p className="subtitle white ">
            Increasing community and knowledge is what we stand <span className="greenHighlightEnd">for </span>
          </p>
        </div>
      </Container>

      <div className="howItWorksWrapper">
        <Container>
          <div>
            <h2>How mtor works</h2>
            <ul>
              <li>
                <img src={stepOne} alt="" height="210" />
                <h3>Share if you want to be a mentor or find a mentor.</h3>
              </li>
              <li>
                <img src={stepTwo} alt="" height="210" />
                <h3>Join a network that is dedicated to helping each other</h3>
              </li>
              <li>
                <img src={stepThree} alt="" height="210" />
                <h3>
                  Help someone to Grow or grow yourself and enhance your career
                  like never before
                </h3>
              </li>
            </ul>
            <div className="joinButton">
              <Link to="/signup/" className="btn primary">
                I want to join!
              </Link>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <div className="community">
          <h2 className="section-title">Community Engagement</h2>
          <div className="community-content">
            <div className="flex-center img-container">
              <img src={community} alt="" width="332" />
            </div>
            <div className="comunity-txt">
              <h3>
                Once you have shared what you are looking for, you will be
                invited to join our exclusive slack channel. From here you will
                be able to network among the community, share your ideas and
                engage in likeminded conversations throughout the channels.
              </h3>
              <p>
                Behind the scenes, the team will look for suitable connections
                for you based on the information you provide us. We will then
                invite you and your partner to chat, how it evolves following
                this is down to you. Online or offline you can choose to keep it
                on the conversation on the channel or not, work around your
                schedule and speak when you both have time.
              </p>
            </div>
          </div>
        </div>
      </Container>

      <div className="industries">
        <Container>
          <div className="flex-center flex-column">
            <h2 className="txt-center">Industries where our mentors work</h2>
            <ul>
              <li>Green-tech</li>
              <li>Consulting</li>
              <li>Automotive and Mobility</li>
              <li>Med-tech</li>
              <li>E-Commerce</li>
              <li>Fin-tech</li>
              <li>many more</li>
            </ul>
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
          <div className="section-numbers">
            <h2 className="txt-white">Mtor in numbers</h2>
            <ul className="column">
              <li className="list-item">
                <div className="icon-container">
                  <img src={mentees} alt="" width="60" />
                </div>
                <span className="numbers">33</span>

                <h4 className="txt-center txt-white">Mentors/ Mentees</h4>
              </li>

              <li className="list-item">
                <div className="icon-container">
                  <img src={intro} alt="" width="60" />
                </div>
                <span className="numbers">45</span>
                <h4 className="txt-center txt-white">Total Members</h4>
              </li>
              <li className="list-item">
                <div className="icon-container">
                  <img src={members} alt="" width="60" />
                </div>
                <span className="numbers">15</span>
                <h4 className="txt-center txt-white">Intros made</h4>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default IndexPage;
