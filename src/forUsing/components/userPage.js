import React from 'react';
import AddItem from './addItem';
import PriceComparison from './priceComparison';
import UserItemsListed from './userItemsLIsted';

const UserPage = () => {
  return (
    <>
      <h1>Welcome HUMAN SO AND SO</h1>
      <h2>User Page</h2>
      <AddItem />
      <PriceComparison />
      <UserItemsListed />
    </>
  );
};

export default UserPage;
