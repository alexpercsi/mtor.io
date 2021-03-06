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
        <div className=""
        
        <h1 className="header">Get conected to your peers to learn or teach</h1>
        <p className="">Join a network that curate professional conections.</p>
        
      </Container>
    </Layout>
  );
};

export default IndexPage;
