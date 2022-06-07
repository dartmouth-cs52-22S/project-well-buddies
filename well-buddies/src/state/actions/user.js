import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  signUp, signIn, getUser, getStar,
} from '../../services/user';

export const ActionTypes = {
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
  FETCH_USER: 'FETCH_USER',
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
      console.log(`ERROR IN SIGNIN: ${error.message}`);
      if (error.message === '409') {
        alert('There is currently not a profile associated with your account. Please click Get Started to create a profile!');
      }
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
      console.log(`ERROR IN SIGNUP: ${error.message}`);
      if (error.message === '409') {
        alert('There is already a profile associated with your account. Please go back to the starting page and click sign in.');
      }
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

export function fetchUser() {
  return (dispatch) => {
    getUser()
      .then((response) => {
        console.log('get response user', response);
        dispatch({ type: ActionTypes.FETCH_USER, payload: response });
      })
      .catch((error) => {
        console.log(`error fetching user ${error}`);
      });
  };
}

export function getStars() {
  return (dispatch) => {
    getStar()
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_USER, payload: response });
      })
      .catch((error) => {
        console.log(`error fetching user ${error}`);
      });
  };
}
