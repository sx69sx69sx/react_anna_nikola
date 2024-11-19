import React from 'react';
import Aerrow from '../img/Aerrow.png';
const Hero = () => {
  return (
    <div className="hero">
      <div className="content-health">
        <p>100% Natural Food</p>
        <h1>
          Choose the best<br />
          healthier way<br />
          of life
        </h1>
        <button>
          <p>Explore Now</p>
          <img src={Aerrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
