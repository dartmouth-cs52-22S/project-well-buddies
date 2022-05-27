import axios from 'axios';
import { LOCAL_URL, ROOT_URL } from '../constants';

const URL = ROOT_URL;

const apiTest = () => {
  return new Promise((resolve, reject) => {
    axios.get(URL)
      .then((response) => {
        resolve(response.data);
      })
      .catch((error) => {
        console.log(`youtube api error: ${error}`);
        reject(error);
      });
  });
};

export default apiTest;
