import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { URL } from '../constants';

export const completeEvent = async (event, wellness) => {
  try {
    const payload = {
      event,
      wellness,
    };
    const jwt = await AsyncStorage.getItem('jwt');
    const response = await axios.post(`${URL}/event/${jwt}`, payload);
    const updatedEvent = response.data;
    return updatedEvent;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const completedEvents = async () => {
  try {
    const jwt = await AsyncStorage.getItem('jwt');
    const response = await axios.get(`${URL}/event/${jwt}`);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
