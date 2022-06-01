import AsyncStorage from '@react-native-async-storage/async-storage';
import { signUp, signIn } from '../../services/user';

export const ActionTypes = {
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
};

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

export function signinUser(idToken) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signin endpoint and passes in { email, password}
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  AsyncStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign In Failed: ${error.response.data}`));
  return (dispatch) => {
    signIn(idToken).then(async (jwt) => {
      dispatch({ type: ActionTypes.AUTH_USER });
      await AsyncStorage.setItem('jwt', jwt);
    }).catch((error) => {
      console.log(`ERROR IN SIGNIN: ${error}`);
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };
}

export function signupUser(userData, idToken) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signup endpoint (only difference from above)
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  AsyncStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign Up Failed: ${error.response.data}`));
  return (dispatch) => {
    signUp(userData, idToken).then(async (jwt) => {
      dispatch({ type: ActionTypes.AUTH_USER });
      await AsyncStorage.setItem('jwt', jwt);
    }).catch((error) => {
      console.log(`ERROR IN SIGNIN: ${error}`);
      dispatch(authError(`Sign Up Failed: ${error.response.data}`));
    });
  };
}

// deletes token from AsyncStorage
// and deauths
export function signoutUser() {
  return async (dispatch) => {
    await AsyncStorage.removeItem('jwt');
    dispatch({ type: ActionTypes.DEAUTH_USER });
  };
}
