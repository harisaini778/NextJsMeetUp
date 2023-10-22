
"use client"

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  initialMeetups: [
    {
      id: 1,
      name: 'Sample Meetup 1',
      address: '123 Street, City',
      time: '2023-10-20 14:00:00',
      image: 'https://source.unsplash.com/featured/?city',
      description: 'Description for Sample Meetup 1', 
    },
    {
      id: 2,
      name: 'Sample Meetup 2',
      address: '456 Avenue, Town',
      time: '2023-10-21 16:00:00',
      image: 'https://source.unsplash.com/featured/?buildings',
      description: 'Description for Sample Meetup 2', 
    },
    {
      id: 3,
      name: 'Sample Meetup 3',
      address: 'Aerodom, Town',
      time: '2023-10-21 16:00:00',
      image: 'https://source.unsplash.com/featured/?london',
      description: 'Description for Sample Meetup 3', 
    },
  ]
};

const meetupsSlice = createSlice({
  name: 'meetups',
  initialState,
  reducers: {
    addMeetup: (state, action) => {
      state.initialMeetups.push(action.payload);
    },
    showAllMeetups: (state) => {
      return state;
    },
  },
});

export const { addMeetup, showAllMeetups, initialMeetups } = meetupsSlice.actions;
export default meetupsSlice.reducer;
