import axios from 'axios';

const axiosWithAuth = () => {
  return axios.create({
    baseURL: 'https://african-marketplace-730.herokuapp.com',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  });
};

export default axiosWithAuth;
