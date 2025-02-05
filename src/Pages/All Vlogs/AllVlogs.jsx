import React, { useEffect, useState } from "react";
import RecentBlogCard from "../Home/RecentBlogCard";

const AllVlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  console.log(blogs);

  useEffect(() => {
    fetch(`http://localhost:5000/blogs?category=${category}&search=${search}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, [search, category]);
  return (
    <div className="my-28 min-h-screen w-[90%] mx-auto">
      <h2 className="text[32px] md:text-5xl my-16 font-bold text-center bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
        Recent Blogs {blogs.length}
      </h2>

      <div className="flex gap-4 mb-8 justify-center">
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
          <option value="Dental Care">Dental Care</option>
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
          <RecentBlogCard key={blog._id} blog={blog}></RecentBlogCard>
        ))}
      </div>
    </div>
  );
};

export default AllVlogs;
