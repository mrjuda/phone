// brandsSlice.js

import { createSlice } from '@reduxjs/toolkit';
import { RESERVE_BRAND } from './brandsActions';
import { getBrands } from './brandsAC';

const brandsSlice = createSlice({
  name: 'brands',
  initialState: [],
  reducer: {},
  extraReducers: {
    [getBrands.fulfilled]: (state, action) => [...action.payload],
    [RESERVE_BRAND]: (state, action) => (
      state.map((brand) => (
        brand.id === action.payload ? { ...brand, reserved: !brand.reserved } : brand
      ))),
  },
});

export default brandsSlice;
