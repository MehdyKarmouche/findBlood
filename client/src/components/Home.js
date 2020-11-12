import React from 'react';
import Navbar from './Navbar';
import HomeContent from './HomeContent';
import Footer from './Footer'

const Home = () => {
  return (
    <div className="Home">
        <Navbar/>
        <HomeContent/>
        <Footer/>
    </div>
  );
}

export default Home;
