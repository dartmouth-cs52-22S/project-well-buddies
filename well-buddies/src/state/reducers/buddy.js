/* eslint-disable no-param-reassign */
import { produce } from 'immer';
import { ActionTypes } from '../actions/calendar';

const initialState = {
  all: [],
  current: {},
};

const BuddyReducer = produce((draftState, action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_BUDDY:
      console.log('fetch buddy', action.payload);
      draftState.all = action.payload;
      break;
    default:
      break;
  }
}, initialState);

export default BuddyReducer;
