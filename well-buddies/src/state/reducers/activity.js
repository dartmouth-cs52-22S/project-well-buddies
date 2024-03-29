/* eslint-disable no-param-reassign */
import { produce } from 'immer';
import { ActionTypes } from '../actions/activity';

const initialState = {
  all: [],
  today: false,
};

const ActivityReducer = produce((draftState, action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_ACTIVITIES:
      draftState.all.push(action.payload);
      break;
    case ActionTypes.FETCH_TODAY:
      draftState.today = action.payload;
      break;
    default:
      break;
  }
}, initialState);

export default ActivityReducer;
