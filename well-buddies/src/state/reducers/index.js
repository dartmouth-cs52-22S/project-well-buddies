import { combineReducers } from '@reduxjs/toolkit';
import EventsReducer from './calendar';
import UserReducer from './user';

const rootReducer = combineReducers({
  events: EventsReducer,
  auth: UserReducer,
});

export default rootReducer;
