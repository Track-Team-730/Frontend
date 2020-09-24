import React from 'react';
import ItemsAvailable from './ItemsAvailable';

function RenderLandingPage(props) {
  return (
    <div>
      <h1>Welcome to African Marketplace</h1>
      <div>
        <h2>Check out what's for sale now:</h2>
      </div>
      <ItemsAvailable />
    </div>
  );
}
export default RenderLandingPage;
