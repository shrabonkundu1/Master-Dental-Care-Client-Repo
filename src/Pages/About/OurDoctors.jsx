
import { Link } from 'react-router-dom';
import doctors from '../../../public/OurDoctors.json'
import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const OurDoctors = () => {
    useEffect(() => {
        AOS.init({
          duration: 1500, 
          easing: "ease-out-quart", 
          // easing: "ease-in-out"
        });
      }, []);
    return (
        <div>
            <div>
                <h3 data-aos="fade-up" className='text-6xl font-dancing text-center font-medium mb-10 md:mb-20'>Our Doctors</h3>
            </div>
            <div className='grid md:grid-cols-2 gap-16 w-[95%] md:w-4/5 mx-auto mb-24'>
                {doctors.map((doctor, index) => (
                    <div data-aos="zoom-in"  data-aos-duration="2000" key={index} className='p-4 border rounded-xl shadow-md'>
                        <img src={doctor.drImg} alt={doctor.drName} className='w-full h-4/6 object-cover rounded-lg mb-4' />
                        <h3 className='text-3xl font-bold font-Playfair mb-2'>{doctor.drName}</h3>
                        <h6 className='font-semibold text-xl font-Playfair my-5'>Why Dentistry</h6>
                        <p className='text-gray-600 mb-5'>{doctor.description}</p>
                        <Link to="/doctors" className='font-Playfair rounded-full px-5  py-2 font-semibold bg-[#2d83c2] text-white '>Learn More</Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurDoctors;
