import axios from 'axios';

// api docs: https://price-api.live/docs
// does require a free api key

const axiosForSauti = () => {
  return axios.create({
    baseURL: 'https://market-price-api.herokuapp.com/sauti/developer/',
    headers: {
      key: 'BR1ERDA-8FVMHS5-JY1TCRV-094NBHP',
    },
  });
};

export default axiosForSauti;
