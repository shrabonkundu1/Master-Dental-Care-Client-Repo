import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';

const BlogDetails = () => {
    const data = useLoaderData();
    const {user} = useContext(AuthContext);
    console.log(user)
    console.log(data)
    return (
        <div >
           <h2 className=" text[32px] md:text-5xl py-16 font-bold text-center bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">Blog Details</h2>

           <div className='border w-8/12 mx-auto shadow-xl rounded-lg p-5 space-y-7'>
            <h2 className='text-4xl text-center font-semibold py-10'>{data.title}</h2>
            {/* <img src={data.blog_url} alt={data.title} /> */}
            <p className='text-[18px] font-medium'><span className='font-bold'>Description :</span> <span className='text-gray-600'> {data.description}</span></p>
            <div>

            </div>
            <div className='flex justify-between items-center'>
                <p className='text-[18px] px-7 py-4 border shadow-lg rounded-lg'><span className='font-bold'>Category : </span><span> {data.category}</span></p>
                <p className='text-[18px] px-7 py-4 border shadow-lg rounded-lg'><span className='font-bold'>Deadline : </span><span> {data.blogDeadline}</span></p>
                
            </div>
           </div>

           {/* Add Comments */}
           <div>
            <h2 className=" text[32px] md:text-5xl py-16 font-bold text-center bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent" >Add Comments</h2>
            <textarea name="" id=""></textarea>
            <div>
            <p className='text-[18px] px-7 py-4 border shadow-lg rounded-lg'><span className='font-bold'>User Name : </span><span> {user.displayName}</span></p>
            <p className='text-[18px] px-7 py-4 border shadow-lg rounded-lg'><span className='font-bold'>Photo URL : </span><span> {user.photoURL}</span></p>
            </div>
           </div>
        </div>
    );
};

export default BlogDetails;