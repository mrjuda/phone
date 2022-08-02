import { configureStore, combineReducers } from '@reduxjs/toolkit';
import rocketsSlice from './rockets/rocketsSlice';
import brandsSlice from './brands/brandsSlice';
import phonesSlice from './phones/phonesSlice';

const reducer = combineReducers({
  brands: brandsSlice.reducer,
  phones: phonesSlice.reducer,
  rockets: rocketsSlice.reducer,
});

const store = configureStore({ reducer });

export default store;
