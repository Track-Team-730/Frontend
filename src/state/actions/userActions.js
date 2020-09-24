// import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';
import axiosForSauti from '../utils/axiosForSauti';

export const ACTION_GET = 'ACTION_GET';
export const ACTION_GET_SUCCESS = 'ACTION_GET_SUCCESS';
export const ACTION_GET_DROP_PRODUCTS_SUCCESS =
  'ACTION_GET_DROP_PRODUCTS_SUCCESS';
export const ACTION_GET_DROP_MARKETS_SUCCESS =
  'ACTION_GET_DROP_MARKETS_SUCCESS';
export const ACTION_GET_ERROR = 'ACTION_GET_ERROR';
export const ACTION_GET_PRICE_COMPS_SUCCESS = 'ACTION_GET_PRICE_COMPS_SUCCESS';
export const ACTION_GET_PRICE_COMPS_ERROR = 'ACTION_GET_PRICE_COMPS_ERROR';

export const getPriceComps = productName => {
  return dispatch => {
    // console.log("getPriceComps ran in userActions");
    // dispatch({ type: ACTION_GET });
    axiosForSauti()
      .get(`product/latestprice?product=${productName}`)
      .then(response => {
        dispatch({
          type: ACTION_GET_PRICE_COMPS_SUCCESS,
          payload: response.data,
        });
        console.log("getPriceComps.it's working!!", response.data);
      })
      .catch(err => {
        dispatch({
          type: 'ACTION_GET_PRICE_COMPS_ERROR',
          payload: `${err.message}: ${err.response.data.message}. Try another product or contact site manager`,
        });
        console.log(
          'getPriceComps dies tragically, err',
          err.message,
          err.response.data.message
        );
      });
  };
};

const getData = () => {
  return dispatch => {
    dispatch({ type: ACTION_GET });
    axiosWithAuth()
      .get('/products')
      .then(response => {
        // console.log('getData Products success', response.data);
        dispatch({
          type: `ACTION_GET_DROP_PRODUCTS_SUCCESS`,
          payload: response.data,
        });
      })
      .catch(err => {
        dispatch({
          type: ACTION_GET_ERROR,
          payload: err,
        });
      });
    axiosWithAuth()
      .get('/markets')
      .then(response => {
        // console.log('getData Markets success', response.data);
        dispatch({
          type: `ACTION_GET_DROP_MARKETS_SUCCESS`,
          payload: response.data,
        });
      })
      .catch(err => {
        dispatch({
          type: ACTION_GET_ERROR,
          payload: err,
        });
      });
  };
};

export default getData;
