import { configureStore, combineReducers } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rocketsSlice';
import brandsSlice from './phones/brandsSlice';

const reducer = combineReducers({
  brands: brandsSlice.reducer,
  rockets: rocketsSlice.reducer,
});

const store = configureStore({ reducer });

export default store;
