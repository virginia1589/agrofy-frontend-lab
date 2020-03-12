import React from 'react';
import './Video.css';



const Video= () => (

    <section id="video" class="video">
    <div class="container">
      <div class="videos">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/D0zYJ1RQ-fs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <div class="youtube">
        <h2>Ckeckout the official pokemon youtube channel</h2>
        <a href="https://www.youtube.com/channel/UCFctpiB_Hnlk3ejWfHqSm6Q" class="btn-view">View more</a>
      </div>
    </div>
  </section>



);

export default Video;