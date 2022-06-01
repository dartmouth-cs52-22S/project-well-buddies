/* eslint-disable no-param-reassign */
import { produce } from 'immer';
import { ActionTypes } from '../actions/calendar';

const initialState = {
  all: [],
  current: {},
  today: [],
  completed: [],
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
    case ActionTypes.FETCH_TODAYS_EVENTS:
      console.log('fetch todays events', action.payload);
      draftState.today = action.payload;
      break;
    case ActionTypes.COMPLETED_EVENTS:
      console.log('fetch todays events', action.payload);
      draftState.completed = action.payload;
      break;
    default:
      break;
  }
}, initialState);

export default EventsReducer;
