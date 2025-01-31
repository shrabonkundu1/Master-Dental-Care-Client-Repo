import React from 'react';
import Banner from './Banner';
import RecentBlogPost from './RecentBlogPost';

const Home = () => {
    return (
       <div>
         <div className='bg-blue-50 h-full w-full'>
            <Banner></Banner>
        </div>
        <div className='w-[90%] mx-auto'>
        <RecentBlogPost></RecentBlogPost>
        </div>
       </div>
        
    );
};

export default Home;