import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from 'components/Layout';
import Container from 'components/Container';
import organizing from 'assets/images/illustration-organizing-ideas.png';
import cvThemeBlack from 'assets/images/cv-themes/black.png';
import cvThemeTeal from 'assets/images/cv-themes/teal.png';
import { Link } from 'gatsby';

const MentorsPage = () => {

  const [format, setFormat] = useState(0);
  const [useParagraphs, setUseParagraphs] = useState(0);
  const [usePhoto, setUsePhoto] = useState(0);
  const [useLanguages, setUseLanguages] = useState(0);
  const [useReferences, setUseReferences] = useState(0);
  const [useCertifications, setUseCertifications] = useState(0);
  const [style, setStyle] = useState(0);

  return (
    <Layout pageName="home">
      <Helmet>
        <title>mtor.io mentors</title>
      </Helmet>
      <section class="dark-bg">
        <Container>
          <div>
            <h4>Mentors</h4>
            <h1 className="title dark">
              Meet the Mentors
            </h1>
            <h3 className="subtitle dark">
            Mtor has over 450 members to date, and growing daily. Meet some of our mentors below, or sign up to see everyone on our slack channel.
            </h3>
          </div>
        </Container>
      </section>
      <div className="mtor-numbers diagonal-line upside-down">
        <svg
          className="seperator"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0">
          <polygon class="fill-white" points="2560 0 0 0 0 100"></polygon>
        </svg>
        <Container>
        </Container>
      </div>      
      <div className="communityWrapper" id="community">
        <Container>
          <div className="community">
            <div className="community-content">
              <div className="comunity-txt">
                <h3>
                  By clicking "Build my CV" you agree to our <Link to="/terms">Terms of Service</Link> and&nbsp;
                <Link to="/privacy">Privacy Policy</Link>
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

export default MentorsPage;
