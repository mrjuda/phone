/* eslint-disable no-unused-vars */
// BrandData.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { reserveBrand } from '../../redux/brands/brandsAC';
import '../../index.css';
import btnDetails from '../icons/arrow-right-circled.png';

const BrandData = ({ brandData }) => {
  const dispatch = useDispatch();
  const {
    brandId,
    brandName,
    brandSlug,
    brandDeviceCount,
  } = brandData;

  return (
    <li id={brandId} className="brand-card">
      <NavLink
        className="nav-link-container"
        onClick={() => dispatch(reserveBrand(brandId))}
        to={brandSlug}
      >
        <div className="c1">
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
          <div className="brand-logo">
            <h1>
              {brandName}
              Logo
            </h1>
          </div>
        </div>
        <div className="c2">
          <h2 className="brand-name">{brandName}</h2>
          <div className="brand-device-count">
            {brandDeviceCount}
          </div>
        </div>
      </NavLink>
    </li>
  );
};

BrandData.propTypes = {
  brandData: PropTypes.shape({
    brandId: PropTypes.number.isRequired,
    brandName: PropTypes.string.isRequired,
    brandSlug: PropTypes.string.isRequired,
    brandDeviceCount: PropTypes.number.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default BrandData;
