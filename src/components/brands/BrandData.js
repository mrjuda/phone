// BrandData.js

import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { reserveRocket } from '../../redux/rockets/rocketsAC';
import { reserveBrand } from '../../redux/brands/brandsAC';
// import Phones from '../phones/Phones';
import '../../index.css';
import btnDetails from '../icons/arrow-right-circled.png';

const BrandData = ({ brandData }) => {
  const dispatch = useDispatch();
  const {
    brandId,
    brandName,
    brandSlug,
    brandDeviceCount,
    // reserved,
  } = brandData;

  // const baseURL = 'https://api-mobilespecs.azharimm.site/v2/';
  // const brandDetailURL = baseURL + brandSlug;

  return (
    <li id={brandId} className="brand-card">
      <div className="c1">
        <NavLink to={brandSlug}>
          <button
            type="button"
            onClick={() => dispatch(reserveBrand(brandId))}
            className="details-icon"
          >
            <img
              src={btnDetails}
              className="details-icon"
              alt="icon"
            />
          </button>
        </NavLink>
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
