/* eslint-disable no-param-reassign */
import { produce } from 'immer';
import { ActionTypes } from '../actions/emotion';

const initialState = {
  all: {},
  today: '',
};

const EmotionReducer = produce((draftState, action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_EMOTIONS:
      draftState.all = action.payload;
      break;
    case ActionTypes.FETCH_EMOTION:
      draftState.today = action.payload;
      break;
    default:
      break;
  }
}, initialState);

export default EmotionReducer;
