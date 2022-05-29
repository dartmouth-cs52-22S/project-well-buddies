import { combineReducers } from '@reduxjs/toolkit';
import BuddyReducer from './buddy';
import EventsReducer from './calendar';
import UserReducer from './user';
import EmotionReducer from './emotion';

const rootReducer = combineReducers({
  events: EventsReducer,
  auth: UserReducer,
  buddy: BuddyReducer,
  emotion: EmotionReducer,
});

export default rootReducer;
