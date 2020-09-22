import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../state/utils/axiosWithAuth';
import { connect } from 'react-redux';
import AddItem from './addItem';
import PriceComparison from './priceComparison';
import UserItemsListed from './userItemsLIsted';
import getData from '../../state/actions/userActions';

const UserPage = ({ getData }) => {
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
    getData();
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

const mapStateToProps = state => {
  return {
    products: state.dropdownProducts,
    markets: state.dropdownMarkets,
  };
};
export default connect(mapStateToProps, { getData })(UserPage);
