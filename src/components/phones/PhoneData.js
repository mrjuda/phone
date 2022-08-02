// PhoneData.js

import React from 'react';
// import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { reservePhone } from '../../redux/brands/brandsAC';
import '../../index.css';
import btnDetails from '../icons/arrow-right-circled.png';

const PhoneData = ({ phoneData }) => {
  // const dispatch = useDispatch();
  const {
    phoneName,
    phoneImage,
    // reserved,
  } = phoneData;

  // const baseURL = 'https://api-mobilespecs.azharimm.site/v2/brands/';
  // const brandDetail = baseURL + brandData.description;

  return (
    <li className="brand-card">
      <div className="c1">
        <button
          type="button"
          // onClick={() => dispatch(reservePhone(phoneId))}
          className="details-icon"
        >
          <img
            src={btnDetails}
            className="details-icon"
            alt="icon"
          />
        </button>
        <div className="brand-logo">
          <h1>
            {phoneImage}
          </h1>
        </div>
      </div>
      <div className="c2">
        <h2 className="brand-name">{phoneName}</h2>
      </div>
    </li>
  );
};

PhoneData.propTypes = {
  phoneData: PropTypes.shape({
    phoneName: PropTypes.string.isRequired,
    phoneImage: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default PhoneData;
