import { getCalendarEvents } from '../../services/google-cal-api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getBuddy, setBuddy } from '../../services/user';

export const ActionTypes = {
  FETCH_BUDDY: 'FETCH_BUDDY',
};

export function fetchBuddy() {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem('token');
    getBuddy(token)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_BUDDY, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}

export function setNewBuddy(buddy='', buddyName='') {
  return async (dispatch) => {
    const token = await AsyncStorage.getItem('token');
    setBuddy(token, buddy, buddyName)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_BUDDY, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}