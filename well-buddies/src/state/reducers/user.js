/* eslint-disable no-param-reassign */
import { produce } from 'immer';
import { ActionTypes } from '../actions/user';

const initialState = {
  authenticated: false,
  userName: '',
  userEmail: '',
  stars: 0,
};

const UserReducer = produce((draftState, action = {}) => {
  switch (action.type) {
    case ActionTypes.AUTH_USER:
      draftState.authenticated = true;
      break;
    case ActionTypes.DEAUTH_USER:
      draftState.authenticated = false;
      break;
    case ActionTypes.AUTH_ERROR:
      draftState.authenticated = false;
      break;
    case ActionTypes.FETCH_USER:
      console.log('fetch user info', action.payload);
      draftState.userName = action.payload.name;
      draftState.userEmail = action.payload.email;
      draftState.stars = action.payload.star;
      break;

    default:
      break;
  }
}, initialState);

export default UserReducer;
