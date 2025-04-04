import React from 'react';

const AboutUs = () => {
    return (
        <div className='flex flex-col md:flex-row justify-between items-center gap-16 w-[95%] md:w-[70%] mx-auto py-10 md:py-36 '>
            <div className='w-[110%] space-y-8'>
                <h2 className='text-6xl font-semibold font-dancing '>Who We Are</h2>
                <p className='leading-7 font-Playfair'>Welcome to Master Dental Surgery, where we go beyond traditional dental care to redefine smiles with cutting-edge technology and expertise.
                <br />
                Our journey started almost three decade ago as a pioneering dental surgery center, dedicated to providing advanced surgical solutions and prosthetic care. With a team of skilled professionals, we are committed to excellence in dental health and aesthetics.
                <br /> 
                With years of experience, we continuously refine our techniques and materials to align with international standards, including the stringent USA FDA regulations, ensuring the highest quality care for our patients.</p>
            {/* <Link><button className=' rounded-full px-5 py-2 font-semibold bg-[#2d83c2] text-white'>Learn more</button></Link> */}
            </div>
            <div className='w-full'>
                <img className='w-[430px]  h-[430px]  border-4 border-[#0d5c9f] rounded-tr-[140px]  rounded-bl-[140px]' src="https://i.ibb.co.com/LdxqkMZf/Chat-GPT-Image-Apr-4-2025-03-47-57-PM-removebg-preview.png" alt="" />
            </div>
            
        </div>
    );
};

export default AboutUs;