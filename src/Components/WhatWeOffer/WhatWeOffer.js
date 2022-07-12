import React from "react";
import "./what-we-offer.css";

function WhatWeOffer() {
  return (
    <div className="services-offered mt-5">
      <p>
        WIth this services and help site for exotic pet owners you have access
        to our large database of verified clients including:
      </p>
      <div className="services-box d-flex justify-content-between align-items-center flex-column">
        <div className="service w-100 mb-3 d-flex flex-column justify-content-center  align-items-center">
          <i className="fa-solid fa-square-check mb-3"></i>
          <p>Reputable Breeders</p>
        </div>
        <div className="service w-100 mb-3 d-flex flex-column justify-content-center align-items-center">
          <i className="fa-solid fa-gear mb-3"></i>
          <p>Quality Craftsman</p>
        </div>
        <div className="service w-100 mb-3 d-flex flex-column justify-content-center align-items-center ">
          <i className="fa-solid fa-building-circle-check mb-3"></i>
          <p>Verified Businesses</p>
        </div>
        <div className="service w-100 mb-3 d-flex flex-column justify-content-center align-items-center">
          <i className="fa-solid fa-bag-shopping mb-3"></i>
          <p>Custom Supplies</p>
        </div>
        <div className="service w-100 mb-3 d-flex flex-column justify-content-center align-items-center">
          <i className="fa-solid fa-award mb-3"></i>
          <p>Trusted Professionals</p>
        </div>
      </div>
    </div>
  );
}
export default WhatWeOffer;
