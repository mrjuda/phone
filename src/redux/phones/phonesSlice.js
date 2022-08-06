// phonesSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { RESERVE_PHONE } from './phonesActions';
import { getPhones } from './phonesAC';

const phonesSlice = createSlice({
  name: 'phones',
  initialState: [],
  reducer: {},
  extraReducers: {
    [getPhones.fulfilled]: (state, action) => [...action.payload],
    [RESERVE_PHONE]: (state, action) => (
      state.map((phone) => (
        phone.id === action.payload ? { ...phone, reserved: !phone.reserved } : phone
      ))),
  },
});

export default phonesSlice;
