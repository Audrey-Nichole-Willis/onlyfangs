import React from "react";

function WhatWeOffer() {
  return (
    <div className="services-offered mt-5">
      <p>
        WIth this services and help site for exotic pet owners you have access
        to our large database of verified clients including:
      </p>
      <div className="services-box d-flex justify-content-between align-items-center">
        <div className="service">
          <i className="fa-solid fa-square-check"></i>
          <p>Reputable Breeders</p>
        </div>
        <div className="service">
          <i className="fa-solid fa-gear"></i>
          <p>Quality Craftsman</p>
        </div>
        <div className="service">
          <i className="fa-solid fa-building-circle-check"></i>
          <p>Verified Businesses</p>
        </div>
        <div className="service">
          <i className="fa-solid fa-bag-shopping"></i>
          <p>Custom Supplies</p>
        </div>
        <div className="service">
          <i className="fa-solid fa-award"></i>
          <p>Trusted Professionals</p>
        </div>
      </div>
    </div>
  );
}
export default WhatWeOffer;
