import React from 'react';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from './Navbar';
import Hero from './Hero';
import Lista from './Lista';
import Posts from '../data/Posts';
import Products from './Products';
import PostProducts from '../data/PostProducts';
import Movie from './Movie';
import Sale from './Sale';
import PostPrincipal from '../data/PostPrincipal';
import Principal from './Principal';
import Formulario from './Formulario';
import Final from './Final'
import PostFinal from '../data/PostFinal';

const Home = () => {
  return(
    <>
   
    <Hero/>
    <Lista posts={Posts}/>
    <Products posts={PostProducts} />
    <Movie/>
    <Sale/>
    <Principal posts={PostPrincipal}/>
    <Formulario/>
  
    </>
  )
}
export default Home;