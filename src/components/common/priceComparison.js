import React, { useEffect } from 'react';
import { getPriceComps } from '../../state/actions/userActions';
import axiosForSauti from '../../state/utils/axiosForSauti';
import { connect } from 'react-redux';

const PriceComparison = ({ getPriceComps }) => {
  useEffect(() => {
    console.log('getPriceComps ran in PriceComparison.js');
    getPriceComps('beans');
  }, []);

  return <h1>Price Comparsions!</h1>;
};

const mapStateToProps = state => {};

export default connect(mapStateToProps, { getPriceComps })(PriceComparison);
