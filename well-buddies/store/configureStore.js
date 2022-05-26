import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../src/state/reducers';

const store = configureStore({
  reducer: rootReducer,
});

export default store;
