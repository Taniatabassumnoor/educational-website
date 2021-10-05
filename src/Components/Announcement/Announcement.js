import React from 'react';
import './Announcement.css';
import Marquee from 'react-fast-marquee';

const Announcement = () => {
    return (
        
           <p className="marquee"><Marquee>
        Announcement: Special 80% Discount For Talented Student
            </Marquee></p>
        
    );
};

export default Announcement;