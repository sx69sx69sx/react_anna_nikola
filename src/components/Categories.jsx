import React from 'react';
import ProductCard from './ProductCard';
import Aerrow from '../img/Aerrow.png';
import Photo from '../img/Photo-Photoroom.png';
import Banana from '../img/banana-Photoroom.png';
import Nuts from '../img/nuts-Photoroom.png';
import Bread from '../img/bread-Photoroom.png';
import Tomato from '../img/tomato-Photoroom.png';
import Bean from '../img/bean-Photoroom.png';
import Hazelnut from '../img/hazelnut-Photoroom.png';
import Egg from '../img/eggs-Photoroom.png';
import Star from '../img/Star.svg';

const products = [
  { category: 'Vegetable', image: Photo, altText: 'broccoli', title: 'Calabrese Broccoli', oldPrice: '$20.00', newPrice: '$13.00', starsImage: Star },
  { category: 'Fresh', image: Banana, altText: 'banana', title: 'Fresh Banana Fruits', oldPrice: '$20.00', newPrice: '$14.00', starsImage: Star },
  { category: 'Millets', image: Nuts, altText: 'nuts', title: 'White Nuts', oldPrice: '$20.00', newPrice: '$15.00', starsImage: Star },
  { category: 'Vegetable', image: Tomato, altText: 'tomato', title: 'Vegan Red Tomato', oldPrice: '$20.00', newPrice: '$17.00', starsImage: Star },
  { category: 'Health', image: Bean, altText: 'bean', title: 'Mung Bean', oldPrice: '$20.00', newPrice: '$11.00', starsImage: Star },
  { category: 'Nuts', image: Hazelnut, altText: 'hazelnut', title: 'Brown Hazelnut', oldPrice: '$20.00', newPrice: '$12.00', starsImage: Star },
  { category: 'Fresh', image: Egg, altText: 'eggs', title: 'Eggs', oldPrice: '$20.00', newPrice: '$17.00', starsImage: Star },
  { category: 'Fresh', image: Bread, altText: 'bread', title: 'Zelco Suji Elaichi Rusk', oldPrice: '$20.00', newPrice: '$15.00', starsImage: Star },
];

const Categories = () => {
  return (
    <div className="categories">
      <p className="decorative-text">Categories</p>
      <h1 className="main-text">Our Products</h1>
      <div className="grids">
        <div className="rows">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
        <button className="btn-categories">
          <p>Load More</p>
          <img src={Aerrow} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Categories;
