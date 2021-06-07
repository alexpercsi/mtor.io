import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from 'components/Layout';
import Container from 'components/Container';
import organizing from 'assets/images/illustration-organizing-ideas.png';
import { Link } from 'gatsby';

const generateCV = () => {
  console.log("test");
};

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
          <p className="subtitle white">
            <h3 className="formLabel">CV Format </h3>
            <input type="radio" name="format" onClick={() => {setFormat(0)}} checked={format===0} /> Compact
            <input type="radio" name="format" onClick={() => {setFormat(1)}} checked={format!==0} /> Long
          </p>
          <p className="subtitle white">
            <span className="formLabel">Bullets or Paragraphs? </span>
            <input type="radio" name="para" onClick={() => {setUseParagraphs(0)}} checked={useParagraphs===0} /> Bullets
            <input type="radio" name="para" onClick={() => {setUseParagraphs(1)}} checked={useParagraphs===1} /> Paragraphs
          </p>
          <p className="subtitle white">
            <span className="formLabel">Include a photo </span>
            <input type="radio" name="photo" onClick={() => {setUsePhoto(0)}} checked={usePhoto===0} /> Yes
            <input type="radio" name="photo" onClick={() => {setUsePhoto(1)}} checked={usePhoto===1} /> No
          </p>
          <p className="subtitle white">
            <span className="formLabel">Include a Languages section? </span>
            <input type="radio" name="lang" onClick={() => {setUseLanguages(0)}} checked={useLanguages===0} /> Yes
            <input type="radio" name="lang" onClick={() => {setUseLanguages(1)}} checked={useLanguages===1} /> No
          </p>
          <p className="subtitle white">
            <span className="formLabel">Include a References section? </span>
            <input type="radio" name="ref" onClick={() => {setUseReferences(0)}} checked={useReferences===0} /> Yes
            <input type="radio" name="ref" onClick={() => {setUseReferences(1)}} checked={useReferences===1} /> No
          </p>
          <p className="subtitle white">
            <span className="formLabel">Include a Certifications section? </span>
            <input type="radio" name="cert" onClick={() => {setUseCertifications(0)}} checked={useCertifications===0} /> Yes
            <input type="radio" name="cert" onClick={() => {setUseCertifications(1)}} checked={useCertifications===1} /> No
          </p>
          <p className="subtitle white">
            <span className="formLabel">Choose a color scheme </span><br />
            <img src="assets/images/cv-themes/black.png" onClick={() => {setStyle(0)}} className={style===0?"selectedStyle":""} />
            <img src="assets/images/cv-themes/teal.png" onClick={() => {setStyle(1)}} className={style===1?"selectedStyle":""} />
          </p>
          <a href={`http://localhost:8001/generate-CV?prefsMap=${format}${style}${useParagraphs}${usePhoto}${useLanguages}${useReferences}${useCertifications}`} className="btn primary">
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
