import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { URL } from '../constants';

const getActivity = async (token, duration) => {
  try {
    const response = await axios.get(`${URL}/activity/${token}`, { duration });
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const getTodayActivity = async () => {
  try {
    const token = await AsyncStorage.getItem('jwt');
    const response = await axios.get(`${URL}/today/${token}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

export default getActivity;
