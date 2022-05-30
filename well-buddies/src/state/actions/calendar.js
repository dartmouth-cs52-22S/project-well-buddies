import { getCalendarEvents } from '../../services/google-cal-api';

export const ActionTypes = {
  FETCH_EVENTS: 'FETCH_EVENTS',
  FETCH_EVENT: 'FETCH_EVENT',
  FETCH_TODAYS_EVENTS: 'FETCH_TODAYS_EVENTS',
  ERROR_SET: 'ERROR_SET',
};

export function fetchEvents(params) {
  return (dispatch) => {
    getCalendarEvents(params)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_EVENTS, payload: response.data.items });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}

export function fetchTodaysEvents(params) {
  return (dispatch) => {
    getCalendarEvents(params)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_TODAYS_EVENTS, payload: response.data.items });
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
        dispatch({ type: ActionTypes.FETCH_EVENT, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}
