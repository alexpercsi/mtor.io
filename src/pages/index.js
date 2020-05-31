import React from "react";
import { Helmet } from "react-helmet";
import Layout from "components/Layout";
import Container from "components/Container";

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
              Get conected to your peers to learn or teach
            </h1>
            <h2 className="subtitle dark">
              Join a network that curate professional conections.
            </h2>
          </div>
          <div className="welcomeActions">
            <a href="/" className="btn primary">
              I want to join!
            </a>
            <a href="/" className="btn">
              About us.
            </a>
          </div>
        </Container>
      </section>

      {/* <Container>
        <section className="bg-hero">
          <div className="hero-text">
            <h4 className="intro">Mentorship Platform</h4>
            <h1 className="header">
              Get conected to your peers to learn or teach
            </h1>
            <h2 className="sub-header">
              Join a network that curate professional conections.
            </h2>
          </div>
          <div className="buttons">
            <a href="#" className="btn-accent">
              I want to join!
            </a>
            <a href="#" className="btn">
              About us.
            </a>
          </div>
          <img src={mainart} title="main-art" />
          <section className="content-one">
            <h2 class="section-title">
              Quality designs made custom, on demand, just for you
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </section>
        </section>
      </Container> */}
    </Layout>
  );
};

export default IndexPage;
