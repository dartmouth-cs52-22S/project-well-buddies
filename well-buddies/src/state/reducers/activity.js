/* eslint-disable no-param-reassign */
import { produce } from 'immer';
import { ActionTypes } from '../actions/activity';

const initialState = {
  all: [],
};

const ActivityReducer = produce((draftState, action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_ACTIVITIES:
      console.log('fetch activity', action.payload);
      draftState.all.push(action.payload);
      break;
    default:
      break;
  }
}, initialState);

export default ActivityReducer;
