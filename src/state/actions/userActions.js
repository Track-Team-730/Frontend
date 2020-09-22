// import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

export const ACTION_GET = 'ACTION_GET';
export const ACTION_GET_SUCCESS = 'ACTION_GET_SUCCESS';
export const ACTION_GET_DROP_PRODUCTS_SUCCESS =
  'ACTION_GET_DROP_PRODUCTS_SUCCESS';
export const ACTION_GET_DROP_MARKETS_SUCCESS =
  'ACTION_GET_DROP_MARKETS_SUCCESS';
export const ACTION_GET_ERROR = 'ACTION_GET_ERROR';

//takes in products or markets url
const getData = () => {
  return dispatch => {
    dispatch({ type: ACTION_GET });
    axiosWithAuth()
      .get('/products')
      .then(response => {
        console.log('getData Products success', response.data);
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
        console.log('getData Markets success', response.data);
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
