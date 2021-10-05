import React, { useEffect, useState } from 'react';
import './ServicesHome.css';

const ServicesHome = () => {
    const [serviceshome,setServiceshome] = useState([])
    useEffect(()=>{
        fetch('./data.JSON')
        .then(res=>res.json())
        .then(data=>setServiceshome(data))
    },[])
    console.log(serviceshome);
    return (
        <div className="services-home-container">
            <h1 className="head">Some of Our Services</h1>
            <div>
             <div className="cart-design ">
                 {
                     serviceshome.map(servicehome=><div className="">
                         <div className="card ">
                             <div className="logo-image">
                                 <img  src={servicehome.image} alt="" />
                             </div>
                            <h2>{servicehome.title}</h2>
                            <h4>Tution Fee: $ {servicehome.price}</h4>
                            <button className="aboutBtn">Apply Now</button>
                         </div>
                     </div>)
                 }
             </div>
            
            </div>
        </div>
    );
};

export default ServicesHome;