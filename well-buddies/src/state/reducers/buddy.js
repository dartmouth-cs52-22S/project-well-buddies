/* eslint-disable no-param-reassign */
import { ActionTypes } from '../actions/buddy';
import {produce} from 'immer';

const initialState = {
  pet: '',
  petName: '',
};

const BuddyReducer = produce((draftState, action = {}) => {
  switch (action.type) {
    case ActionTypes.FETCH_BUDDY:
      console.log('fetch buddy hm', action.payload);
      draftState.pet = action.payload.pet;
      draftState.petName = action.payload.petName;
      break;
    default:
      break;
  }
}, initialState);

export default BuddyReducer;
