import React from 'react';
import './History.css';



const History = () => (
    <section className="history" id="history">
    <div className="container"> 
      <h2 >Pokemon history</h2>

      <div className="historycontent">
        <div className="history1">

          <div className="year1">
             
             {/* <svg   width="24px" height="24px" viewbox="0 0 24 24"  >
              <image width= "24px" height="24px" xlink:href="/pokeball.svg" > </image>
            </svg> */}
            <h3>1980 </h3>
          </div>
          <div className="historyp1">
            <h4>First steps</h4>
           <p> Pokémon is short for “Pocket Monsters", the original Japanese name.The franchise has its roots in a gaming magazine in the early 1980s in Japan—Game Freak, started by Satoshi Tajiri and Ken Sugimori. Tajiri was the writer, while Sugimori was the illustrator.</p>
          </div>
          </div>

        <div className="history2"> 
          <div className="year2">
            {/* <svg   width="24px" height="24px" viewbox="0 0 24 24"  >
              <image width= "24px" height="24px" xlink:href="assets/joystick.svg"></image>
            </svg> */}
            <h3 >1996  </h3>
          </div>
          <div className="historyp2">
           <h4>Game Boy</h4>
           <p> 26 February 1996 marks the debut of the Pokémon franchise in the form of both those games on the Game Boy in Japan. At its heart, Pocket Monsters: Red and Green was a very basic Japanese role-playing game.</p>
           
          </div>
        </div>

        <div className="history3">
          <div className="year3">
            {/* <svg   width="24px" height="24px" viewbox="0 0 24 24" >
              <image width= "24px" height="24px" xlink:href="assets/pikachu.svg"  ></image> 
            </svg> */}
            <h3 >1998 </h3>
          </div>
          <div className="historyp3">
            <h4>Pikachu</h4>
            <p> The popularity of the anime and Yellow, I believe, led to Pikachu becoming the most recognizable and loved Pokémon out there. Pocket Monsters’ success led to North America getting the games in 1998 for the Game Boy (as Pokémon Red and Blue). These few years in the public saw Pokémon go from a game about a hobby to a worldwide phenomenon.</p>
          </div> </div>
        </div>

      
    </div>
  </section>
 
  );
  
  export default History;
  