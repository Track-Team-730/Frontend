import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import AddItem from './addItem';
import PriceComparison from './priceComparison';
import UserItemsListed from './userItemsLIsted';
import getData from '../../state/actions/userActions';

const UserPage = ({ getData }) => {
  useEffect(() => {
    getData();
  }, [getData]);

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

const mapStateToProps = state => {
  return {
    products: state.dropdownProducts,
    markets: state.dropdownMarkets,
  };
};
export default connect(mapStateToProps, { getData })(UserPage);
