"use client"

import { configureStore } from '@reduxjs/toolkit';
import meetupsReducer from "./Features/slices/datastore";

const store = configureStore({
  reducer: {
    meetups: meetupsReducer,
  },
});

export default store;

