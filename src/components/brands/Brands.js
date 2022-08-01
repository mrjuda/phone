// Phones.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBrands } from '../../redux/phones/brandsAC';
import BrandData from './BrandData';
import '../../index.css';

const Brands = () => {
  const brands = useSelector((store) => store.brands);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!brands.length) {
      dispatch(getBrands());
    }
  }, [dispatch]);
  return (
    <div className="rockets-container">
      <hr />
      <ul className="rockets-list">
        {brands.map((brand) => <BrandData key={brand.id} brandData={brand} />)}
      </ul>
    </div>
  );
};

export default Brands;
