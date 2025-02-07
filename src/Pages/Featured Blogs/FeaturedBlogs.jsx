import React, { useEffect, useState } from 'react';

const FeaturedBlogs = () => {
    const [topBlogs,setTopBlogs] = useState([]);
    const [loading,setLoading] = useState(false);
    useEffect(() => {
        fetch("http://localhost:5000/top_post")
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setTopBlogs(data)
        })
    },[])
    return (
        <div>
            <h2  className="text[32px] md:text-5xl my-16 font-bold text-center bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent py-16 " >Top Post Blogs {topBlogs.lengtha}</h2>
        </div>
    );
};

export default FeaturedBlogs;