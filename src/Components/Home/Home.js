import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ServicesHome from '../ServicesHome/ServicesHome';

const Home = () => {
    return (
        <div>
            
           <Banner></Banner> 
           <ServicesHome></ServicesHome>
           <Footer></Footer>
        </div>
    );
};

export default Home;