import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Layout from 'components/Layout';
import Container from 'components/Container';
import organizing from 'assets/images/illustration-organizing-ideas.png';
import MentorCard from '../components/MentorCard';
import { StaggeredMotion, spring } from 'react-motion'
import alexpercsi from 'assets/images/Alex Percsi.png';
import edenwhitcomb from 'assets/images/Eden Whitcomb.png';
import glaubergriffante from 'assets/images/Glauber Griffante.png';
import jodibarrow from 'assets/images/Jodi Barrow.png';
import lisaquatmann from 'assets/images/Lisa Quatmann.png';
import lorenzodenobili from 'assets/images/Lorenzo De Nobili.png';
import markotoole from 'assets/images/Mark O_Toole.png';
import paigemcguigan from 'assets/images/Paige McGuigan.png';
import { Link } from 'gatsby';

const MentorsPage = () => {

   const allMentors = [
    {name: "Eden Whitcomb", image: edenwhitcomb, domains: {leadership:1, frontend:0, php: 0, recruitment: 1}},
    {name: "Alex Percsi", image: alexpercsi, domains: {leadership:1, frontend:1, php: 0, recruitment: 0}},
    {name: "Lisa Quatmann", image: lisaquatmann, domains: {leadership:1, frontend:0, php: 0, recruitment: 0}},
    {name: "Lorenzo De Nobili", image: lorenzodenobili, domains: {leadership:1, frontend:1, php: 0, recruitment: 0}},
    {name: "Glauber Griffante", image: glaubergriffante, domains: {leadership:0, frontend:0, php: 1, recruitment: 0}},
    {name: "Mark O'Toole", image: markotoole, domains: {leadership:0, frontend:0, php: 0, recruitment: 1}},
    {name: "Jodi Barrow", image: jodibarrow, domains: {leadership:0, frontend:0, php: 0, recruitment: 1}},
    {name: "Paige McGuigan", image: paigemcguigan, domains: {leadership:0, frontend:0, php: 0, recruitment: 1}},
  ];
  const initialState = [
    {
      key: "leadership",
      name: "Leadership",
      selected:true
    },
    {
      key: "frontend",
      name: "Frontend",
      selected:true
    },
    {
      key: "php",
      name: "PHP",
      selected:true
    },
    {
      key: "recruitment",
      name: "Recruitment",
      selected:true
    }
  ]
  const [domains, setDomains] = useState(initialState);
  const [selectedMentors, setSelectedMentors] = useState(allMentors);

  const updateState = domain => {
    const newState = [...domains];
    for (let i = 0; i < newState.length; i++) {
      if (newState[i].key===domain.key) {
        newState[i].selected=!newState[i].selected;
      }
    }
    const newSelectedMentors = [];
    for (let i = 0; i < allMentors.length; i++) {
      let found = false;
      for (let j = 0; j < newState.length; j++) {
        if (newState[j].selected && allMentors[i].domains[newState[j].key]) {
          found = true;
          break;
        }
      }
      if (found) {
        newSelectedMentors.push(allMentors[i]);
      }
      
    }
    setDomains(newState);
    setSelectedMentors(newSelectedMentors);
  }

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
            Mtor has over 450 members to date, and growing daily. Meet some of our mentors below, or <a href="/signup">sign up</a> to see everyone on our slack channel.
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
              <div className="tag-cloud">
                {
                domains.map(domain => <span class={domain.selected?"domain":"domain disabled"} onClick={() => updateState(domain)} key={domain.key}>{domain.name}</span>)
                }
              </div>
              <StaggeredMotion
                defaultStyles={selectedMentors.map(() => ({ opacity: 0, translateY: 0 }))}
                key={selectedMentors}
                styles={prevInterpolatedStyles =>
                  prevInterpolatedStyles.map((_, i) => {
                    return i === 0
                      ? { opacity: spring(1, {stiffness:150, damping:15}), translateY: spring(60, {stiffness:150, damping:15}) }
                      : {
                        opacity: prevInterpolatedStyles[i - 1].opacity,
                        translateY: spring(prevInterpolatedStyles[i - 1].translateY, {stiffness:150, damping:15})
                      }
                  })
                }
              >
                {interpolatingStyles => {
                    return (
                      <div className="mentors-grid">
                        {interpolatingStyles.map((style, i) => (
                          i < selectedMentors.length && <MentorCard name={selectedMentors[i].name} image={selectedMentors[i].image} key={i} style={{opacity:style.opacity, translateY:style.translateY}}></MentorCard>
                        ))}
                      </div>
                    );
                  }}
              </StaggeredMotion>
              </div>
              <div>Join us and help shape the next generation of experts!<br /><br />
              <Link to="/signup/" className="btn primary">
                Apply to be a mentor
              </Link>
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
