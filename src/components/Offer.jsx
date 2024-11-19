import React from 'react';
import ProductCards from './ProductCards';
import Wtf from '../img/wtf-Photoroom.png';
import Wow from '../img/cabbage-Photoroom.png';
import Onion from '../img/onion-Photoroom.png';
import Cabbage from '../img/cabbage-Photoroom.png';
import Star from '../img/Star.svg';
import Aerrow from '../img/Aerrow.png';

const Offer = () => {
  const productData = [
    {
      category: 'Vegetable',
      imageSrc: Wtf,
      title: 'Mung Bean',
      oldPrice: '$20.00',
      newPrice: '$11.00',
      stars: Star,
    },
    {
      category: 'Vegetable',
      imageSrc: Wow,
      title: 'Brown Hazelnut',
      oldPrice: '$20.00',
      newPrice: '$12.00',
      stars: Star,
    },
    {
      category: 'Vegetable',
      imageSrc: Onion,
      title: 'Onion',
      oldPrice: '$20.00',
      newPrice: '$17.00',
      stars: Star,
    },
    {
      category: 'Vegetable',
      imageSrc: Cabbage,
      title: 'Cabbage',
      oldPrice: '$20.00',
      newPrice: '$17.00',
      stars: Star,
    },
  ];

  return (
    <div className="offer">
      <div className="text-button">
        <div className="text-offer">
          <label>Offer</label>
          <h1>We Offer Organic For You</h1>
        </div>
        <button>
          <p>View All Product</p>
          <img src={Aerrow} alt="arrow" />
        </button>
      </div>
      <div className="grids">
        <div className="rows">
          {productData.map((product, index) => (
            <ProductCards
              key={index}
              category={product.category}
              imageSrc={product.imageSrc}
              title={product.title}
              oldPrice={product.oldPrice}
              newPrice={product.newPrice}
              stars={product.stars}
              imageStyle={product.imageStyle} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
