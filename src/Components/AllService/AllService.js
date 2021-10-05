import React, { useEffect, useState } from 'react';
import './AllService.css';

const AllService = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('./allServiceData.JSON')
        .then(res=>res.json())
        .then(data=>setServices(data));
    },[])
    console.log(services);
    return (
        <div>
            <div className="all-services-container">
                <h1>All of Our Services</h1>
                <div className="cart-design ">
                    {
                               services.map(service=><div className="">
                               <div className="card">
                                   <div className="logo-image">
                                       <img  src={service.image} alt="" />
                                   </div>
                                  <h2>{service.title}</h2>
                                  <h4>Tution Fee: $ {service.price}</h4>
                                  <button className="aboutBtn">Apply Now</button>
                                  
                               </div>
                           </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default AllService;