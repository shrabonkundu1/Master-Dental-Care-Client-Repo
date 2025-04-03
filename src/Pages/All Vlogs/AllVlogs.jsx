import React, { useEffect, useState } from "react";
import RecentBlogCard from "../Home/RecentBlogCard";
import AOS from "aos";
import "aos/dist/aos.css";

const AllVlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading,setLoading] = useState(false);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    AOS.init({
      duration: 1500, 
      easing: "ease-out-quart", 
      // easing: "ease-in-out"
    });
  }, []);
  useEffect(() => {
    setLoading(true)
    fetch(`https://master-dental-server-side.vercel.app/allBlogs?category=${category}&search=${search}`)
    .then((res) => res.json())
    .then((data) => {
        setLoading(true)
        setBlogs(data);
        setLoading(false)
      });
  }, [search, category]);

  if(loading) {
    return(
      <div className='min-h-screen flex justify-center items-center'>
        <span className="loading loading-ring loading-lg "></span>
      </div>
    )
  }
  return (
    <div className="my-28 min-h-screen w-[90%] mx-auto">
      <h2 className="text-4xl md:text-5xl py-6 font-bold text-center bg-gradient-to-r from-blue-700 font-Playfair to-blue-400 bg-clip-text text-transparent">
        All Blogs 
      </h2>

      <div className="flex flex-col md:flex-row gap-4 mb-8 justify-center">
        <input
          type="text"
          placeholder="Search by title..."
          name="search"
          // value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-md"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border px-4 py-2 rounded-md"
        >
          <option value="">All Categories</option>
          <option value="Oral Health">Oral Health</option>
          <option value="Preventive Dentistry">Preventive Dentistry</option>
          <option value="Restorative Dentistry">Restorative Dentistry</option>
          <option value="Orthodontics">Orthodontics</option>
          <option value="Cosmetic Dentistry">Cosmetic Dentistry</option>
          <option value="Pediatric Dentistry">Pediatric Dentistry</option>
        </select>
      </div>

      <div className="grid justify-center items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <RecentBlogCard key={blog._id} data-aos="fade-up"  blog={blog}></RecentBlogCard>
        ))}
      </div>
    </div>
  );
};

export default AllVlogs;
