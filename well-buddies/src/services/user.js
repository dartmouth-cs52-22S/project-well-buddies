import axios from 'axios';
import { ROOT_URL, LOCAL_URL } from '../constants'

const URL = LOCAL_URL;

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
    const token = response.data.jwt.token;
    return token;
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
    const { data } = await axios.post(`${URL}/signin`, payload);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
