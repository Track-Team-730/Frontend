import axios from 'axios';

const axiosForSauti = () => {
  return axios.create({
    baseURL: 'https://market-price-api.herokuapp.com/sauti/developer/',
    headers: {
      key: 'BR1ERDA-8FVMHS5-JY1TCRV-094NBHP',
    },
  });
};

export default axiosForSauti;
