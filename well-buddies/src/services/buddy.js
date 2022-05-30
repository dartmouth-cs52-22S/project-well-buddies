import axios from 'axios';
import { URL } from '../constants';

export const getBuddy = async (token) => {
  try {
    const response = await axios.get(`${URL}/buddy/${token}`);
    console.log(response.data);
    return response;
  } catch (error) {
    throw new Error(error);
  }
};

export const setBuddy = async (token, newBuddy, newBuddyName) => {
  const payload = {
    token,
    pet: newBuddy, 
    petName: newBuddyName
  };
  try {
    const { data } = await axios.patch(`${URL}/buddy`, payload);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};