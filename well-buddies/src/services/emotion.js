import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { URL } from '../constants';

export const getEmotions = async () => {
  try {
    const jwt = await AsyncStorage.getItem('jwt');
    const response = await axios.get(`${URL}/emotions/${jwt}`);
    const emotions = response.data;
    return emotions;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const getEmotion = async () => {
  try {
    const jwt = await AsyncStorage.getItem('jwt');
    const response = await axios.get(`${URL}/emotion/${jwt}`);
    const emotion = response.data.title;
    return emotion;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const setEmotion = async (emotion) => {
  try {
    const payload = { title: emotion };
    const jwt = await AsyncStorage.getItem('jwt');
    const response = await axios.get(`${URL}/emotion/${jwt}`, payload);
    const emotions = response.data;
    return emotions;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const newEmotion = async (emotion) => {
  try {
    const jwt = await AsyncStorage.getItem('jwt');
    const payload = { title: emotion };
    const response = await axios.post(`${URL}/emotion/${jwt}`, payload);
    const emotions = response.data;
    console.log(emotion);
    return emotions;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};
