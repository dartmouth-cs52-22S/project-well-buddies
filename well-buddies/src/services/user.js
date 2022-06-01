import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { URL } from '../constants';

// sign up
export const signUp = async (userData, token) => {
  const payload = {
    ...userData,
    token,
  };
  try {
    const response = await axios.post(`${URL}/signup`, payload);
    const newToken = response.data;
    return newToken;
  } catch (error) {
    throw new Error(error.response.status);
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
    throw new Error(error.response.status);
  }
};

export const getUser = async () => {
  try {
    const jwt = await AsyncStorage.getItem('jwt');
    const response = await axios.get(`${URL}/profile/${jwt}`);
    console.log('get user success');
    const user = response.data;
    return user;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const setUser = async (updatedName) => {
  try {
    const jwt = await AsyncStorage.getItem('jwt');
    const payload = { name: updatedName };
    const response = await axios.patch(`${URL}/user/${jwt}`, payload);
    const user = response.data;
    return user;
  } catch (error) {
    throw new Error(error);
  }
};
