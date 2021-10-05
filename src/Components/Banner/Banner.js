import React from 'react';
import './Banner.css';

const Banner = () => {
    return (
      
        <div className="banner-container ">
          
      <div className="">
      
        <div className="row d-flex banner align-items-center justify-content-center">
        
          <div className="col-md-6 logo">
            <h1 className="title">
            
            <span id="name">WELCOME TO UNIVERSITY</span> <br /> Eduford
            </h1>
            <p className="text-white text-center hero-p">
              Education is not the filling of a <br />
              pail, but lighting of a fire.
            </p>
            <button className="about-btn">Apply Now</button>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
    );
};

export default Banner;