import React from "react";
import { Helmet } from "react-helmet";

import Layout from "components/Layout";
import Container from "components/Container";

const PrivacyPage = () => {
  return (
    <Layout pageName="privacy">
      <Helmet>
        <title>Privacy Policy</title>
      </Helmet>
      <Container>
        <h1>Privacy Policy</h1>
        <p>
          Thank you for choosing to be part of our community at Mtor.io
          (“Company”, “we”, “us”, or “our”). We are committed to protecting your
          personal information and your right to privacy. If you have any
          questions or concerns about our policy, or our practices with regards
          to your personal information, please contact us at support@mtor.io.
        </p>
      </Container>
    </Layout>
  );
};

export default PrivacyPage;
