import React from 'react';
import Fruits from '../img/fruits_about_us.png'
import Icon from '../img/Icon1.png'
import Icona from '../img/Icon2.png'
import Aerrow from '../img/Aerrow.png'

const AboutUs = () => {
  return (
    <div className="about-us">
      <img src={Fruits} alt="fruits" />
      <div className="content-about-us">
        <label>About Us</label>
        <h1>
          We Believe in Working<br />
          Accredited Farmers
        </h1>
        <p>
          Simply dummy text of the printing and typesetting industry. Lorem had ceased to<br />
          been the industry's standard dummy text ever since the 1500s, when an unknown<br />
          printer took a galley.
        </p>
        <div className="icons-about">
          <div className="row-1">
            <img src={Icon} alt="icon" />
            <span>
              <h5>Organic Foods Only</h5>
              <p>
                Simply dummy text of the printing and typesetting<br />
                industry. Lorem Ipsum
              </p>
            </span>
          </div>
          <div className="row-2">
            <img src={Icona} alt="icon" />
            <span>
              <h5>Quality Standards</h5>
              <p>
                Simply dummy text of the printing and typesetting<br />
                industry. Lorem Ipsum
              </p>
            </span>
          </div>
        </div>
        <button>
          <p>Shop Now</p>
          <img src={Aerrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default AboutUs;
