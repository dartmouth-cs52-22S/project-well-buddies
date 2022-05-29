import AsyncStorage from '@react-native-async-storage/async-storage';
import { getBuddy, setBuddy } from '../../services/buddy';

export const ActionTypes = {
  FETCH_BUDDY: 'FETCH_BUDDY',
};

export function fetchBuddy() {
  return async (dispatch) => {
    const jwt = await AsyncStorage.getItem('jwt');
    if (jwt !== null) {
      getBuddy(jwt)
        .then((response) => {
          dispatch({ type: ActionTypes.FETCH_BUDDY, payload: response.data });
        })
        .catch((error) => {
          console.log(`error getting buddy: ${error}`);
          /* dispatch({ type: ActionTypes.ERROR_SET, error }); */
        });
    }
  };
}

export function setNewBuddy(buddy='', buddyName='') {
  return async (dispatch) => {
    const jwt = await AsyncStorage.getItem('jwt');
    if (jwt !== null) {
      setBuddy(jwt, buddy, buddyName)
        .then((response) => {
          dispatch({ type: ActionTypes.FETCH_BUDDY, payload: response.data });
        })
        .catch((error) => {
          console.log(`error setting buddy: ${error}`);
          // dispatch({ type: ActionTypes.ERROR_SET, error });
        });
    }
    
  };
}