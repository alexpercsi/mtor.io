import React from 'react';
import { Helmet } from 'react-helmet';
import Container from 'components/Container';
import { ReactTypeformEmbed } from 'react-typeform-embed';

const SignupPage = () => {
  return (
  
    <>
      <Helmet>
        <title>Join us</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Muli:ital,wght@0,300;0,400;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Container>
        <ReactTypeformEmbed url="https://edenwhitcomb.typeform.com/to/ThgIWs" />
      </Container>
    </>
   
  );
};

export default SignupPage;
