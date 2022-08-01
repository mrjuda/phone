// BrandData.js

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { reserveRocket } from '../../redux/rockets/rocketsAC';
import { reserveBrand } from '../../redux/phones/brandsAC';

const BrandData = ({ brandData }) => {
  const dispatch = useDispatch();
  const {
    brandId,
    brandName,
    // brandSlug,
    brandDeviceCount,
    // reserved,
  } = brandData;

  // const baseURL = 'https://api-mobilespecs.azharimm.site/v2/brands/';
  // const brandDetail = baseURL + brandData.description;

  return (
    <li id={brandId} className="rocket-card">
      <div className="c1">
        <h2>{brandName}</h2>
        {/* <img className="rocket-image" src={image} alt="rocket-pic" /> */}
      </div>
      <div className="c2">
        <h2 className="rocket-name">{brandName}</h2>
        <div className="rocket-res-desc">
          <p className="rocket-description">
            {brandDeviceCount}
          </p>
        </div>
        <button
          type="button"
          onClick={() => dispatch(reserveBrand(brandId))}
          className="btn-reserve-rocket"
        >
          Details
        </button>
      </div>
    </li>
  );
};

BrandData.propTypes = {
  brandData: PropTypes.shape({
    brandId: PropTypes.string.isRequired,
    brandName: PropTypes.string.isRequired,
    brandSlug: PropTypes.string.isRequired,
    brandDeviceCount: PropTypes.string.isRequired,
    reserved: PropTypes.bool.isRequired,
  }).isRequired,
};

export default BrandData;
