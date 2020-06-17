import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import { ReactTypeformEmbed } from 'react-typeform-embed';

const SignupPage = () => {
  return (
    <Layout pageName="signup">
      <Helmet>
        <title>Join us</title>
      </Helmet>
      <Container>
        <ReactTypeformEmbed url="https://form.typeform.com/to/Q1vRO1x2" />
      </Container>
    </Layout>
  );
};

export default SignupPage;
