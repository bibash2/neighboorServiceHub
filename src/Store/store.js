import { configureStore } from '@reduxjs/toolkit';
import allPostReducer from './allPostSlice';

export const store = configureStore({
  reducer: allPostReducer,
});