import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from 'components/Layout';
import Container from 'components/Container';
import organizing from 'assets/images/illustration-organizing-ideas.png';
import cvThemeBlack from 'assets/images/cv-themes/black.png';
import cvThemeTeal from 'assets/images/cv-themes/teal.png';
import { Link } from 'gatsby';

const CVBuilderPage = () => {

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
        <title>mtor.io cv builder - kickstart your professional resume</title>
      </Helmet>
      <section className="welcome">
        <Container>
          <div className="welcomeText">
            <h4 className="tagline">CV Builder - Kickstart your professional resume</h4>
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
          <br /><br />
          <p className="subtitle white">
            <h2 className="formLabel">CV Format </h2>
            <input type="radio" name="format" onClick={() => {setFormat(0)}} checked={format===0} /> <label>Compact</label>
            <input type="radio" name="format" onClick={() => {setFormat(1)}} checked={format!==0} /> <label>Long</label>
          </p>
          <p className="subtitle white">
            <h2 className="formLabel">Bullets or Paragraphs? </h2>
            <input type="radio" name="para" onClick={() => {setUseParagraphs(0)}} checked={useParagraphs===0} /> <label>Bullets</label>
            <input type="radio" name="para" onClick={() => {setUseParagraphs(1)}} checked={useParagraphs===1} /> <label>Paragraphs</label>
          </p>
          <p className="subtitle white">
            <h2 className="formLabel">Include a photo? </h2>
            <input type="radio" name="photo" onClick={() => {setUsePhoto(0)}} checked={usePhoto===0} /> <label>No</label>
            <input type="radio" name="photo" onClick={() => {setUsePhoto(1)}} checked={usePhoto===1} /> <label>Yes</label>
          </p>
          <p className="subtitle white">
            <h2 className="formLabel">Include a Languages section? </h2>
            <input type="radio" name="lang" onClick={() => {setUseLanguages(0)}} checked={useLanguages===0} /> <label>No</label>
            <input type="radio" name="lang" onClick={() => {setUseLanguages(1)}} checked={useLanguages===1} /> <label>Yes</label>
          </p>
          <p className="subtitle white">
            <h2 className="formLabel">Include a References section? </h2>
            <input type="radio" name="ref" onClick={() => {setUseReferences(0)}} checked={useReferences===0} /> <label>No</label>
            <input type="radio" name="ref" onClick={() => {setUseReferences(1)}} checked={useReferences===1} /> <label>Yes</label>
          </p>
          <p className="subtitle white">
            <h2 className="formLabel">Include a Certifications section? </h2>
            <input type="radio" name="cert" onClick={() => {setUseCertifications(0)}} checked={useCertifications===0} /> <label>No</label>
            <input type="radio" name="cert" onClick={() => {setUseCertifications(1)}} checked={useCertifications===1} /> <label>Yes</label>
          </p>
          <p className="subtitle white cvThemes">
            <h2 className="formLabel">Choose a colour scheme </h2> <br />
            <img src={cvThemeBlack} onClick={() => {setStyle(0)}} className={style===0?"selectedStyle black":"black"} />
            <img src={cvThemeTeal} onClick={() => {setStyle(1)}} className={style===1?"selectedStyle teal":"teal"} /> <br />
            <span>Selected colour scheme <span className={style===0?"black":"teal"}>{style===0?"black":"teal"}</span></span>
          </p>
          <a href={`https://cv-service.mtor.io/generate-CV?prefsMap=${format}${style}${useParagraphs}${usePhoto}${useLanguages}${useReferences}${useCertifications}`} className="btn primary">
              Build my CV!
          </a>
        </div>
      </Container>

      
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

export default CVBuilderPage;
