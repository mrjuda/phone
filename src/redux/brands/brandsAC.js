// brandsAC.js

import { createAsyncThunk } from '@reduxjs/toolkit';
import { GET_BRANDS, RESERVE_BRAND } from './brandsActions';

const baseURL = 'https://api-mobilespecs.azharimm.site/v2/brands';

export const getBrands = createAsyncThunk(GET_BRANDS, async () => {
  const res = await fetch(baseURL);
  const brands = await res.json();
  const brandsData = [];
  brands.data.forEach((brand) => {
    brandsData.push({
      brandId: brand.brand_id,
      brandName: brand.brand_name,
      brandSlug: brand.brand_slug,
      brandDeviceCount: brand.device_count,
      reserved: false,
    });
  });
  return brandsData;
});

export const reserveBrand = (id) => ({
  type: RESERVE_BRAND,
  payload: id,
});
