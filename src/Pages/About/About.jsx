import React from 'react';
import AboutUs from './AboutUs';
import OurDoctors from './OurDoctors';

const About = () => {
    return (
        <div>
            <div className='banner'>
                <div>
                <img className='h-[600px] w-full object-cover ' src="https://i.ibb.co.com/7JkhZN6t/FB-IMG-1743885449167.jpg" alt="" />
                </div>
                <div>
                    
                </div>
            </div>
            <div>
                <AboutUs></AboutUs>
            </div>
            <div>
                <OurDoctors></OurDoctors>
            </div>
        </div>
    );
};

export default About;