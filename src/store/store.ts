import { configureStore } from '@reduxjs/toolkit';
import { default as counterReducer } from './slices/counter-slice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
