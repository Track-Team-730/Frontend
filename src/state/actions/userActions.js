// import axios from 'axios';
import axiosWithAuth from '../utils/axiosWithAuth';

export const ACTION_GET = 'ACTION_GET';
export const ACTION_GET_SUCCESS = 'ACTION_GET_SUCCESS';
export const ACTION_GET_ERROR = 'ACTION_GET_ERROR';

const getData = url => {
  return dispatch => {
    dispatch({ type: ACTION_GET });
    axiosWithAuth()
      .get(`/${url}`)
      .then(response => {
        console.log('getData success', response.data);
        dispatch({
          type: ACTION_GET_SUCCESS,
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
