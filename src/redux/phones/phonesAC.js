// phonesAC.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_PHONES, RESERVE_PHONE } from './phonesActions';

const baseURL = 'https://api-mobilespecs.azharimm.site/v2/brands';

export const getPhones = createAsyncThunk(GET_PHONES, async () => {
  const res = await fetch(baseURL);
  const phones = await res.json();
  const phonesData = [];
  phones.data.phones.forEach((phone) => {
    phonesData.push({
      // phoneId: brand.brand_id,
      phoneName: phone.phone_name,
      // phoneSlug: phone.slug,
      phoneImage: phone.image,
      reserved: false,
    });
  });
  return phonesData;
});

export const reservePhone = (id) => ({
  type: RESERVE_PHONE,
  payload: id,
});
