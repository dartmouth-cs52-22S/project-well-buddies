import axios from 'axios';

const API_URL = 'https://well-buddies-api-ac5z.onrender.com/api';

const apiTest = () => {
  return new Promise((resolve, reject) => {
    axios.get(API_URL)
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
