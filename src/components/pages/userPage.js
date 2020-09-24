import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../state/utils/axiosWithAuth';
import { connect } from 'react-redux';
import AddItem from '../common/addItem';
import PriceComparison from '../common/priceComparison';
import UserItemsListed from '../common/userItemsLIsted';
import getData from '../../state/actions/userActions';

const UserPage = ({ getData }) => {
  const [userItemsList, setUserItemsList] = useState([]);
  const [productToCompare, setProductToCompare] = useState('');

  const getUserItems = () => {
    axiosWithAuth()
      .get('/user/items')
      .then(res => {
        setUserItemsList(res.data);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getData();
  }, [getData]);

  useEffect(() => {
    getUserItems();
  }, []);

  return (
    <>
      <h1>Welcome HUMAN SO AND SO</h1>
      <h2>User Page</h2>
      <AddItem setProductToCompare={setProductToCompare} />
      <UserItemsListed
        updateItems={setUserItemsList}
        userItemsList={userItemsList}
        setProductToCompare={setProductToCompare}
      />
      <PriceComparison setProductToCompare={productToCompare} />
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
