import { b } from 'framer-motion/client';
import React, { useEffect, useState } from 'react';
import RecentBlogCard from './RecentBlogCard';

const RecentBlogPost = () => {
    const [blogs,setBlogs] = useState([]);
    console.log(blogs)

    useEffect(()=> {
        fetch('http://localhost:5000/recentBlogs')
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setBlogs(data)
        })
    },[])
    return (
        <div className='my-28 min-h-screen'>
            <h2 className='text[32px] md:text-5xl my-16 font-bold text-center bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent'>Recent Blogs {blogs.length}</h2>

            <div className='grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    blogs.map(blog => <RecentBlogCard key={blog._id} blog={blog}></RecentBlogCard>)
                }
            </div>
        </div>
    );
};

export default RecentBlogPost;a