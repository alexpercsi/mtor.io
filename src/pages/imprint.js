import React from 'react'
import { Helmet } from 'react-helmet'

import Layout from 'components/Layout'
import Container from 'components/Container'
import { Link } from 'gatsby';

const ImprintPage = () => {
  return (
    <Layout pageName="imprint">
      <Helmet>
        <title>Imprint</title>
      </Helmet>
      <Container>
        <div className="flex-column txt-center">
          <h2 className="header1-fontsize pages-title ">Imprint</h2>
          <address>
            {' '}
            Name &amp; Contact <br />
            Mtor.io is a project by:
            <br />
            Alex Percsi
            <br />
            Llyod-G.-Wells-Str. 20
            <br />
            14163 Berlin <br />
            support@mtor.io
            <p>
              This is a non-profit, non-commercial project. There is no legal
              obligation for neither the mentor nor &quot;Mtor.io&quot; and its
              founders that can be inferred by any communication or interaction
              that occurs between mentors and members of the group (referred to
              as ‘mentees’). The communication is suggestion only and there is
              no accountability by “Mtor.io” or its members after the sessions
              conclude.
            </p>
          </address>

          <div className="flex-center i-want-to-join">
            <Link to="/signup/" className="btn primary">
              I want to join!
            </Link>
          </div>
        </div>
      </Container>
    </Layout>
  );
}

export default ImprintPage
