/* eslint-disable no-param-reassign */
import { produce } from 'immer';
import { ActionTypes } from '../actions/calendar';

const initialState = {
  all: [],
  current: {},
};

const EventsReducer = produce((draftState, action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_EVENTS:
      console.log('fetch events', action.payload);
      draftState.all = action.payload;
      break;
    case ActionTypes.FETCH_EVENT:
      console.log('fetch event');
      draftState.current = action.payload;
      break;
    default:
      break;
  }
}, initialState);

export default EventsReducer;
