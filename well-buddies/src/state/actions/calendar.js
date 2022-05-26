import { getCalendarEvents } from '../../services/google-cal-api';

export const ActionTypes = {
  FETCH_EVENTS: 'FETCH_EVENTS',
  FETCH_EVENT: 'FETCH_EVENT',
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

export function fetchEvent(accessToken, eventID) {
  return (dispatch) => {
    getCalendarEvents(accessToken, eventID)
      .then((response) => {
        console.log('accesstoken', accessToken);
        dispatch({ type: ActionTypes.FETCH_EVENT, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}
