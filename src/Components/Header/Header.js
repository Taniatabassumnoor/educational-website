import React from 'react';
import './Header.css';
import logo from '../../Images/logo.png'
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import AllService from '../AllService/AllService';
import Contact from '../Contact/Contact';

const Header = () => {
    
    return (
        <div className="MenuBar-container">
        <div className="container">
          <div className="navigation">
            <div className="">
              <div className="logo-img">
                <img className="w-75" src={logo} alt="" />
              </div>
            </div>
            <div className="">
              <div className="menu-container ">
                <ul className="d-flex align-items-end justify-content-end">
                  <Link to="/home" className="items">
                    <Home></Home>
                    <li>Home</li>
                  </Link>
                  <Link to="/services" className="items">
                    <AllService></AllService>
                    <li>Services</li>
                  </Link>
                  <Link to="/about" className="items">
                    <li>About Us</li>
                  </Link>
                  <Link to="contact" className="items">
                    <Contact></Contact>
                    <li>Contact Us</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Header;