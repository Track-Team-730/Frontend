import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../state/utils/axiosWithAuth';
import AddItem from './addItem';
import PriceComparison from './priceComparison';
import UserItemsListed from './userItemsLIsted';

const UserPage = () => {
  const [userItemsList, setUserItemsList] = useState([]);

  const getUserItems = () => {
    axiosWithAuth()
      .get('/user/items')
      .then(res => {
        setUserItemsList(res.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getUserItems();
  }, []);
  return (
    <>
      <h1>Welcome HUMAN SO AND SO</h1>
      <h2>User Page</h2>
      <AddItem />
      <PriceComparison />
      <UserItemsListed
        updateItems={setUserItemsList}
        userItemsList={userItemsList}
      />
    </>
  );
};

export default UserPage;
