// Phones.js

import React, { useEffect, useState } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getPhones } from '../../redux/phones/phonesAC';
import PhoneData from './PhoneData';
import '../../index.css';
import btnGoBack from '../icons/arrow-left.png';
import btnMic from '../icons/mic.png';
import btnSettings from '../icons/gear.png';

const Phones = () => {
  const { slug } = useParams();
  const phones = useSelector((store) => store.phones);
  const [brandName, setBrandName] = useState('');
  useEffect(() => {
    if (phones.length > 0) {
      setBrandName(phones[1].brandName);
    }
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPhones(slug));
  }, []);
  return (
    <div className="phones-container">
      <div className="header">
        <div className="h-c1">
          <NavLink className="nav-icon" to="/">
            <img src={btnGoBack} className="nav-icon" alt="logo" />
          </NavLink>
          <h2 className="nav-text">2022</h2>
        </div>
        <div className="h-c2">
          <h1 className="header-title">
            devices by
            {' '}
            {brandName}
          </h1>
        </div>
        <div className="h-c3">
          <img src={btnMic} className="nav-icon" alt="logo" />
          <img src={btnSettings} className="nav-icon" alt="logo" />
        </div>
      </div>
      <div className="banner">DEVICES LIST</div>
      <ul className="phones-list">
        {phones.map((phone) => (
          <PhoneData key={phone.phoneSlug} phoneData={phone} />
        ))}
      </ul>
    </div>
  );
};

export default Phones;
