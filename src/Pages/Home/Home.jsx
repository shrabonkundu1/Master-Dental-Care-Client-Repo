import React from 'react';
import Banner from './Banner';
import RecentBlogPost from './RecentBlogPost';
import Newsletter from './Newsletter';
import OurServices from './OurServices';
import Testimonials from './Testimonials';
// import Testimonials from './Testimonials';

const Home = () => {
    return (
       <div>
         <div className='bg-blue-50 h-full w-full'>
            <Banner></Banner>
        </div>
        <div className='w-[90%] mx-auto'>
        <RecentBlogPost></RecentBlogPost>
        </div>
        <div className='w-[90%] mx-auto my-24 mb-36'>
            <OurServices></OurServices>
        </div>
        <div className='my-32'>
            <Testimonials></Testimonials>
            {/* <Testimonialas></Testimonialas> */}
        </div>
        <div className='bg-blue-100 h-full w-full'>
            <Newsletter></Newsletter>
        </div>
       </div>
        
    );
};

export default Home;