import { getCalendarEvents } from '../../services/google-cal-api';

export const ActionTypes = {
  FETCH_EVENTS: 'FETCH_EVENTS',
  ERROR_SET: 'ERROR_SET',
};

export function fetchEvents(accessToken) {
  return (dispatch) => {
    getCalendarEvents(accessToken)
      .then((response) => {
        console.log('accesstoken', accessToken);
        dispatch({ type: ActionTypes.FETCH_EVENTS, payload: response.data.items });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}
