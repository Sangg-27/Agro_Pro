import "./Homecard.css";
import Card from "../images/Caard.png";
// import card from '../assets/cardd.mp4'
import React from "react";

const Homecard = () => {
  return (
    <>
      <div className='heroo'>
        <div className='masksk'>
          {/* <video src={card} muted autoPlay loop type="video/mp4"></video> */}
          <img className='intro-img' src={Card} alt='Banner' />
          <div className='contentt'>
            {/* <h4>Refer a Friend</h4>
                  <h2><span>20% Offer</span> On Your Next Order</h2> */}
            <a href='/Blog'>
              <button className='normal'>Know More</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homecard;
