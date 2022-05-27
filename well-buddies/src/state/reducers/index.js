import { combineReducers } from '@reduxjs/toolkit';
import BuddyReducer from './buddy';
import EventsReducer from './calendar';
import UserReducer from './user';

const rootReducer = combineReducers({
  events: EventsReducer,
  auth: UserReducer,
  buddy: BuddyReducer,
});

export default rootReducer;
