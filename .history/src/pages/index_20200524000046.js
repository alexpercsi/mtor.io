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
      <Container>
        <h1>Get conected to your peers to learn or teach</h1>
        <p>Join the network.</p>
        pageName
      </Container>
    </Layout>
  );
};

export default IndexPage;
