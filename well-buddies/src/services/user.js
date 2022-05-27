import axios from 'axios';
import { ROOT_URL, LOCAL_URL } from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const URL = ROOT_URL;

// sign up
export const signUp = async (userData, user, token) => {
  const payload = {
    ...userData,
    googleUser: JSON.stringify(user),
    token,
  };
  try {
    console.log('payload', payload);
    const response = await axios.post(`${URL}/signup`, payload);
    const newToken = response.data.jwt.token;
    return newToken;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const signIn = async (token) => {
  const payload = {
    token,
  };
  try {
    const response = await axios.post(`${URL}/signin`, payload);
    const newToken = response.data.jwt.token;
    return newToken;  
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

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
