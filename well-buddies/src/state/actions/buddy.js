import { getCalendarEvents } from '../../services/google-cal-api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ActionTypes = {
  FETCH_BUDDY: 'FETCH_BUDDY',
};

export function fetchBuddy() {
  return (dispatch) => {
    getBuddy(AsyncStorage.getAllKeys('token'))
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_BUDDY, payload: response.data.items });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}
