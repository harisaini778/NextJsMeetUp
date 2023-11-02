
"use client"

import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from "@reduxjs/toolkit";





const initialState = {
  initialMeetups: [],
};

export const fetchAllMeetUps = createAsyncThunk(
  'slices/fetchAllMeetUps',
  async (_, thunkAPI) => {
    try {
      const response = await fetch('https://next-js-meet-up-two.vercel.app/api/FetchMeetUps');
      
      if (!response.ok) {
        throw new Error("Failed to fetch meetups");
      }
      
      const data = await response.json();

      console.log("Fetched data:", data); 

      return data; 
    } catch (error) {
      throw error;
    }
  }
);



// export const startFetchingAllMeetUps = (dispatch) => {

//   const fetchInterval = 2000;

//   const fetchDataAndDispatch = () => {
//     dispatch(fetchAllMeetUps());
//   }

//   fetchDataAndDispatch();
//   setInterval(fetchDataAndDispatch, fetchInterval);

// }

const meetupsSlice = createSlice({
  name: 'meetups',
  initialState,
  reducers: {
    // addMeetup: (state, action) => {
    //   state.initialMeetups.push(action.payload);
    // },
    showAllMeetups: (state) => {
      return state;
    },
  },
  extraReducers: (builder) => {
    
    builder
      .addCase(fetchAllMeetUps.fulfilled, (state, action)  => {
        state.initialMeetups = action.payload;
    })

  },
});

export const { addMeetup, showAllMeetups, initialMeetups } = meetupsSlice.actions;
export default meetupsSlice.reducer;
