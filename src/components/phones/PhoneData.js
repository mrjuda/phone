// PhoneData.js

import React from 'react';
import PropTypes from 'prop-types';
import '../../index.css';
import btnDetails from '../icons/arrow-right-circled.png';

const PhoneData = ({ phoneData }) => {
  const {
    phoneName,
    phoneImage,
  } = phoneData;

  return (
    <li className="phone-card">
      <div className="c1">
        <h2 className="phone-name">{phoneName}</h2>
      </div>
      <div className="c2">
        <div className="phone-image">
          <img
            src={phoneImage}
            className="details-icon"
            alt="icon"
          />
        </div>
      </div>
      <div className="c3">
        <button
          type="button"
          className="details-icon"
        >
          <img
            src={btnDetails}
            className="details-icon"
            alt="icon"
          />
        </button>
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
