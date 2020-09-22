import axios from 'axios';

export const ACTION_GET = 'ACTION_GET';
export const ACTION_GET_SUCCESS = 'ACTION_GET_SUCCESS';
export const ACTION_GET_ERROR = 'ACTION_GET_ERROR';

const getUser = () => {
  return dispatch => {
    axios
      .get('')
      .then(res => console.log(res))
      .catch(res => console.log(res));
  };
};

export default getUser;
