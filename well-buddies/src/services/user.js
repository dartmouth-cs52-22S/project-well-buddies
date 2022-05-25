import axios from 'axios';

const URL = 'https://well-buddies-api-ac5z.onrender.com/api/user';

// sign up 
export const signUp = async (email, password, userData) => {
  const payload = {
    ...userData,
    email,
    password,
  };
  try {
    const { data } = await axios.post(`${URL}/signup`, payload);
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const signIn = async(email, password) => {
  const payload = {
    email,
    password,
  };
  try{
    const { data } = await axios.post(`${ROOT_URL}/signin${API_KEY}`, payload);
    return data;

  } catch (error) {
    console.log(error); 
    throw new Error(error);
  }
}