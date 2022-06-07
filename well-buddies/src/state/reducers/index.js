import { combineReducers } from '@reduxjs/toolkit';
import BuddyReducer from './buddy';
import EventsReducer from './calendar';
import UserReducer from './user';
import EmotionReducer from './emotion';
import ActivityReducer from './activity';

const rootReducer = combineReducers({
  events: EventsReducer,
  auth: UserReducer,
  buddy: BuddyReducer,
  emotion: EmotionReducer,
  activities: ActivityReducer,
});

export default rootReducer;
