import React from 'react';
import './Home.css';
import Hero from '../../components/Hero/Hero';
import History from '../../components/History/History';
import Video from '../../components/Video/Video';
import Contact from '../../components/Contact/Contact';

const Home = () => (
  <div className="home page">
  <Hero/>
  <History/>
  <Video/>
  <Contact/>
  </div>  
);

export default Home;
