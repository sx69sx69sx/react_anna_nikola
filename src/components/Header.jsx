import React from 'react';
import Logo from '../img/Logo.svg'
import Vector from '../img/Vector.svg'
import Cart from '../img/cart.svg'
import Icon from '../img/Icon.svg'


const Header = () => {
  return (
    <header>
      <nav>
        <div className="logo">
          <img src={Logo} alt="Logo" />
          <h1>Organick</h1>
        </div>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li>
            <a href="#">Pages</a>
            <img style={{ marginLeft: '4px' }} src={Icon} alt="icon" />
          </li>
          <li><a href="#">Shop</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">News</a></li>
        </ul>
        <div className="cart-search">
          <div className="search-bar">
            <input type="text" className="search-input" />
            <button className="search-icon">
              <img src={Vector} alt="search" />
            </button>
          </div>
          <div className="cart-bar">
            <button className="cart-icon">
              <img src={Cart} alt="cart" />
            </button>
            <p>Cart(0)</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
