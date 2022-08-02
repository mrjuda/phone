// Phones.js

import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBrands } from '../../redux/phones/brandsAC';
import BrandData from './BrandData';
import '../../index.css';
import btnGoBack from '../icons/arrow-left.png';
import btnMic from '../icons/mic.png';
import btnSettings from '../icons/gear.png';

const Brands = () => {
  const brands = useSelector((store) => store.brands);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!brands.length) {
      dispatch(getBrands());
    }
  }, [dispatch]);
  return (
    <div className="brands-container">
      <div className="header">
        <div className="h-c1">
          <img src={btnGoBack} className="nav-icon" alt="logo" />
          <h2 className="nav-text">2015</h2>
        </div>
        <div className="h-c2">
          <h1 className="header-title">
            phone makers
          </h1>
        </div>
        <div className="h-c3">
          <img src={btnMic} className="nav-icon" alt="logo" />
          <img src={btnSettings} className="nav-icon" alt="logo" />
        </div>
      </div>
      <div className="banner">DEVICES BY BRAND</div>
      <ul className="brands-list">
        {brands.map((brand) => <BrandData key={brand.id} brandData={brand} />)}
      </ul>
    </div>
  );
};

export default Brands;
