import React from 'react';
import Header from './components/Header';
import './styles.css';
import ColumnsInfo from './components/ColumnsInfo';
import AboutUs from './components/AboutUs';
import Hero from './components/Hero';
import Categories from './components/Categories';
import TestimonialSection from './components/TestimotionalSection';
import Offer from './components/Offer';
import Eco from './components/Eco';
import CategoriesCard from './components/CategoriesCard';
import Newsletter from './components/NewsLetter';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Header />
      <Hero />
      <ColumnsInfo />
      <AboutUs />
      <Categories/>
      <TestimonialSection/>
      <Offer/>
      <Eco/>
      <CategoriesCard/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
