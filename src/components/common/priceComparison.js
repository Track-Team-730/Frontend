import React, { useEffect } from 'react';
import axiosForSauti from '../../state/utils/axiosForSauti';

const PriceComparison = () => {
  useEffect(() => {
    axiosForSauti()
      .get('product/latestprice?product=apples')
      .then(response => {
        // console.log("it's working!!", response);
      })
      .catch(err => {
        console.log('it dies tragically,', err);
      });
  }, []);

  return <h1>Price Comparsions!</h1>;
};

export default PriceComparison;
