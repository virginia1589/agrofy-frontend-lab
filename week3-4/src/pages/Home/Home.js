import React from 'react';
import './Home.css';
import Hero from '../../components/Hero/Hero';
import History from '../../components/History/History';
import Video from '../../components/Video/Video';
import Header from '../../components/Header/Header';

const Home = () => (
  <div className="home page">
  <Hero/>
  <History/>
  <Video/>
  </div>  
);

export default Home;
