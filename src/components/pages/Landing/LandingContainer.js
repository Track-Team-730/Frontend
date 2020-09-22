import React from 'react';
import RenderLandingPage from './RenderLandingPage';
import Container from '@material-ui/core/Container';

function LandingContainer({ LoadingComponent }) {
  return (
    <>
      <Container maxWidth="md">
        <RenderLandingPage />
      </Container>
    </>
  );
}

export default LandingContainer;
