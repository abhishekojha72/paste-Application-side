import { configureStore } from '@reduxjs/toolkit';
import pasteReducer from './pasteSlice'; // Correct path to pasteSlice

export const store = configureStore({
  reducer: {
    paste: pasteReducer, // Make sure pasteReducer is properly imported
  },
});