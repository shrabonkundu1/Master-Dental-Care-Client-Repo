import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import { Link } from "react-router-dom";
const MyPostedVlogs = () => {
  const [blogs, setBlogs] = useState([]);
  console.log(blogs);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetch(`http://localhost:5000/blogs?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(data);
      });
  }, [user?.email]);
  return (
    <div>
      <h2 className="mt-36 font-bold text-[32px] lg:text-5xl md:text-4xl text-center"> MyPostedVlogs : {blogs.length}</h2>

   


<div className="overflow-x-auto">
        <table className="table my-16 w-[90%] mx-auto">
          <thead className="">
            <tr>
              <th>Blog URL</th>
              <th>Title</th>
              <th>Category</th>
              <th>Deadline</th>
              <th>Comment Count</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog) => (
              <tr key={blog._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={blog.blog_url} alt={blog.title} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{blog.title}</td>
                <td>{blog.category}</td>
                <td>{blog.blogDeadline}</td>
                <td>{blog.applicationCount}</td>
                <th>
                  <Link to={`/viewApplication/${blog._id}`}>
                  <button
                    className="btn btn-ghost btn-xs"
                  >
                    View Application
                  </button>
                  </Link>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPostedVlogs;
