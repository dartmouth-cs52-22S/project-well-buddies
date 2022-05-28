import axios from 'axios';
import { URL } from '../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

// sign up
export const signUp = async (userData, token) => {
  const payload = {
    ...userData,
    token,
  };
  try {
    console.log('payload', payload);
    const response = await axios.post(`${URL}/signup`, payload);
    const newToken = response.data;
    return newToken;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const signIn = async (tokenId) => {
  const payload = {
    token: tokenId,
  };
  try {
    const response = await axios.post(`${URL}/signin`, payload);
    const newToken = response.data;
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
