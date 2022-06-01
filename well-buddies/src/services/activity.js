import axios from 'axios';
import { URL } from '../constants';

const getActivity = async (token, duration) => {
  try {
    const response = await axios.get(`${URL}/activity/${token}`, { duration });
    console.log(response.data);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export default getActivity;
