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
      draftState.all = action.payload;
      break;
    case ActionTypes.FETCH_EVENT:
      draftState.current = action.payload;
      break;
    case ActionTypes.FETCH_TODAYS_EVENTS:
      draftState.today = action.payload;
      break;
    case ActionTypes.COMPLETED_EVENTS:
      draftState.completed = action.payload;
      break;
    default:
      break;
  }
}, initialState);

export default EventsReducer;
