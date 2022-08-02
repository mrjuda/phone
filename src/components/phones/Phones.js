/* eslint-disable arrow-body-style */
// Phones.js

// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getBrands } from '../../redux/brands/brandsAC';
// import { getPhones } from '../../redux/phones/phonesAC';
// import PhoneData from './PhoneData';
import '../../index.css';
import btnGoBack from '../icons/arrow-left.png';
import btnMic from '../icons/mic.png';
import btnSettings from '../icons/gear.png';

const Phones = () => {
  // const phones = useSelector((store) => store.phones);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   if (!phones.length) {
  //     dispatch(getPhones());
  //   }
  // }, [dispatch]);
  return (
    <div className="brands-container">
      <div className="header">
        <div className="h-c1">
          <img src={btnGoBack} className="nav-icon" alt="logo" />
          <h2 className="nav-text">phone makers</h2>
        </div>
        <div className="h-c2">
          <h1 className="header-title">
            devices
          </h1>
        </div>
        <div className="h-c3">
          <img src={btnMic} className="nav-icon" alt="logo" />
          <img src={btnSettings} className="nav-icon" alt="logo" />
        </div>
      </div>
      <div className="banner">DEVICES BY BRAND</div>
      <ul className="brands-list">
        {/* {phones.map((phone) => <PhoneData key={phone.id} phoneData={phone} />)} */}
      </ul>
    </div>
  );
};

export default Phones;
