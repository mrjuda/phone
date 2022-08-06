// phonesAC.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_PHONES, RESERVE_PHONE } from './phonesActions';

const baseURL = 'https://api-mobilespecs.azharimm.site/v2/brands/';

export const getPhones = createAsyncThunk(GET_PHONES, async (slug) => {
  const res = await fetch(baseURL + slug);
  const phones = await res.json();
  const phoneData = [];

  phones.data.phones.forEach((phone) => {
    phoneData.push({
      brandName: phone.brand,
      phoneName: phone.phone_name,
      phoneSlug: phone.slug,
      phoneImage: phone.image,
      reserved: false,
    });
  });
  return phoneData;
});

export const reservePhone = (id) => ({
  type: RESERVE_PHONE,
  payload: id,
});
