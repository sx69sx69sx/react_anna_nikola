import React from 'react';
import StatsChart from './StatsChart';
import Avatarka from '../img/avatarka.png';
import Star from '../img/Star.svg';
import Navigation from '../img/Navigation.svg';


const TestimonialSection = () => {
  const stats = [
    { value: '100%', label: 'Organic' },
    { value: '285', label: 'Active Product' },
    { value: '350+', label: 'Organic Orchads' },
    { value: '25+', label: 'Years of Farming' },
  ];

  return (
    <div className="testimonial">
      <label>Testimonial</label>
      <h1>What Our Customer Saying?</h1>
      <img src={Avatarka} alt="avatarka" className="avatar" />
      <img src={Star} alt="stars" className="stars" />
      <p className="simple-text">
        Simply dummy text of the printing and typesetting industry. Lorem Ipsum simply dummy
        <br />
        text of the printing and typesetting industry. Lorem Ipsum has been.
      </p>
      <p className="text-fullname">Sara Taylor</p>
      <p className="text-role">Consumer</p>
      <img src={Navigation} alt="navigation ellipse" className="navigation" />
      <hr />
      <div className="charts">
        {stats.map((stat, index) => (
          <StatsChart key={index} value={stat.value} label={stat.label} />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;
