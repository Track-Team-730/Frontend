import axios from 'axios';

const axiosWithAuth = () => {
  return axios.create({
    baseURL: '',
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  });
};

export default axiosWithAuth;
