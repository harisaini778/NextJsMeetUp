"use client"

import { configureStore } from '@reduxjs/toolkit';
import meetupsReducer from "./Features/slices/page";

const store = configureStore({
  reducer: {
    meetups: meetupsReducer,
  },
});

export default store;

