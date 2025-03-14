import { b } from 'framer-motion/client';
import React, { useEffect, useState } from 'react';
import RecentBlogCard from './RecentBlogCard';

const RecentBlogPost = () => {
    const [blogs,setBlogs] = useState([]);
    const [loading,setLoading] = useState(false);

    useEffect(()=> {
        setLoading(true)
        fetch('https://master-dental-server-side.vercel.app/recentBlogs')
        .then(res => res.json())
        .then(data => {
            setBlogs(data)
            setLoading(false)
        })
    },[])

    if(loading) {
        return(
          <div className='min-h-screen flex justify-center items-center'>
            <span className="loading loading-ring loading-lg "></span>
          </div>
        )
      }
    return (
        <div className='my-28 min-h-screen'>
            <h2 className='text-4xl md:text-5xl py-6 mb-10 font-bold text-center font-Playfair bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent'>Recent Blogs</h2>

            <div className='grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    blogs.map(blog => <RecentBlogCard key={blog._id} blog={blog}></RecentBlogCard>)
                }
            </div>
        </div>
    );
};

export default RecentBlogPost;