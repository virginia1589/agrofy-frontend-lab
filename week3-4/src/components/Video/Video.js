import React from 'react';
import './Video.css';



const Video= () => (
  
    <section id="video" className="video">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#FFFFFF" fillOpacity="1" d="M0,96L80,122.7C160,149,320,203,480,192C640,181,800,107,960,90.7C1120,75,1280,117,1360,138.7L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
    </svg>
    <div className="container">
      <div className="videos">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/D0zYJ1RQ-fs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      <div className="youtube">
        <h2>Ckeckout the official pokemon youtube channel</h2>
        <a href="https://www.youtube.com/channel/UCFctpiB_Hnlk3ejWfHqSm6Q" className="btn-view">View more</a>
      </div>
      
    </div>
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#FFFFFF" fillOpacity="1" d="M0,96L80,122.7C160,149,320,203,480,192C640,181,800,107,960,90.7C1120,75,1280,117,1360,138.7L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
</svg>
  </section>



);

export default Video;