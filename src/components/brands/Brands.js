// Brands.js

import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getBrands } from '../../redux/brands/brandsAC';
import BrandData from './BrandData';
import '../../index.css';
import btnGoBack from '../icons/arrow-left.png';
import btnMic from '../icons/mic.png';
import btnSettings from '../icons/gear.png';
import btnSearch from '../icons/search.png';
import btnDelete from '../icons/delete.png';
import testBlend from '../icons/test-blend.jpg';

const Brands = () => {
  const brands = useSelector(
    (store) => store.brands,
  );

  const [lookUpStr, setLookUpStr] = useState('');
  let deviceCounter = 0;
  if (brands.length > 0) {
    const deviceCounterArr = [];
    brands.forEach((phone) => {
      deviceCounterArr.push(Number(phone.brandDeviceCount));
    });
    deviceCounter = deviceCounterArr.reduce((a, b) => a + b, 0);
  }

  const dispatch = useDispatch();
  useEffect(() => {
    if (!brands.length) {
      dispatch(getBrands());
    }
  }, [dispatch]);

  const searchedBrand = brands.filter((phone) => (
    phone.brandName.toLowerCase().includes(lookUpStr.toLocaleLowerCase())
  ));
  let showSearchedBrand = [];
  if (lookUpStr.trim().length > 0) {
    showSearchedBrand = [...searchedBrand];
  } else {
    showSearchedBrand = [...brands];
  }

  return (
    <div className="brands-container">
      <div className="header">
        <div className="h-c1">
          <img src={btnGoBack} className="nav-icon" alt="logo" />
          <h2 className="nav-text">2022</h2>
        </div>
        <div className="h-c2">
          <h1 className="header-title">
            devices by brand
          </h1>
        </div>
        <div className="h-c3">
          <img src={btnMic} className="nav-icon" alt="logo" />
          <img src={btnSettings} className="nav-icon" alt="logo" />
        </div>
      </div>
      <div className="brands-banner">
        <div className="bb-1">
          <img src={btnSearch} className="nav-icon" alt="logo" />
          <input
            type="text"
            className="search-bar"
            value={lookUpStr}
            placeholder="Search brands"
            onChange={(e) => setLookUpStr(e.target.value)}
          />
          <button
            type="button"
            className="search-delete"
            onClick={() => setLookUpStr('')}
          >
            <img src={btnDelete} className="nav-icon" alt="logo" />
          </button>
        </div>
        <div className="bb-2">
          {deviceCounter}
          {' '}
          devices available now
        </div>
        <div className="test-blend">
          <img
            src={testBlend}
            className="test-blend-pic"
            alt="logo"
          />
          <h1 className="test-blend-text">
            JudaLabs
          </h1>
        </div>
      </div>
      <div className="sub-banner">DEVICES BY MAKER</div>
      <ul className="brands-list">
        {showSearchedBrand.map((brand) => (
          <BrandData key={brand.brandSlug} brandData={brand} />
        ))}
      </ul>
    </div>
  );
};

export default Brands;
