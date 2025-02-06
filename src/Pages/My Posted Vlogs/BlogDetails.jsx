import React, { useContext, useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import Swal from "sweetalert2";

const BlogDetails = () => {
  const data = useLoaderData();
  const [commentText,setCommentText] = useState("");
  const { user } = useContext(AuthContext);
  console.log(user);
  console.log(data);

  const handleCommentSubmit = (e) => {
    e.preventDefault();

  const  commentsData = {
        blog_id: data._id,
        user_name: user?.displayName,
        user_profile_picture: user?.photoURL,
        comment_text: commentText,
    }
    fetch("http://localhost:5000/comments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(commentsData),
    })
      .then((res) => res.json())
      .then((data) => {
       console.log(data)
       if(data.insertedId){
        Swal.fire({
            title: "Comment Publish!",
            icon: "success",
            draggable: true
          });
          setCommentText("");
       }
      });
  };

  

  return (
    <div>
      <h2 className=" text[32px] md:text-5xl py-16 font-bold text-center bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
        Blog Details
      </h2>

      <div className="border w-8/12 mx-auto shadow-xl rounded-lg p-5 space-y-7">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <h2 className="text-4xl  font-semibold py-10">
          {data.title}
        </h2>
        {
          user?.email === data?.hr_email && (
          <Link to={`/updateBlog/${data._id}`}>
             <button  className="bg-green-500 text-white font-bold rounded-lg px-4 py-2 mt-4">
            Update Blog
          </button>
           </Link>
          )
        }
        </div>
        {/* <img src={data.blog_url} alt={data.title} /> */}
        {/* <div className="flex  gap-1 text-[18px] px-7 py-4 border shadow-lg rounded-lg">
          <span className="font-bold">Description:</span>
          <span className="text-wrap">{data.description}</span>
        </div> */}
        <p className="flex  gap-1 text-[18px] px-7 py-4 border shadow-lg rounded-lg">
          <span className="font-bold">Description:</span> {data.description}
        </p>
        <div></div>
        <div className="flex justify-between gap-4 items-center">
          <p className="text-[18px] w-full px-7 py-4 border shadow-lg rounded-lg">
            <span className="font-bold">Category : </span>
            <span> {data.category}</span>
          </p>
          <p className="text-[18px] w-full px-7 py-4 border shadow-lg rounded-lg">
            <span className="font-bold">Deadline : </span>
            <span> {data.blogDeadline}</span>
          </p>
        </div>
        <div className="flex gap-4 justify-between items-center">
          <p className="text-[18px] w-full px-7 py-4 border shadow-lg rounded-lg">
            <span className="font-bold">User Name : </span>
            <span> {data.hr_name}</span>
          </p>
          <p className="text-[18px] w-full px-7 py-4 border shadow-lg rounded-lg">
            <span className="font-bold">User Email : </span>
            <span> {data.hr_email}</span>
          </p>
        </div>
      </div>

{/* 
      { user?.email === data?.hr_email ? (
            <p className="text-red-500 text-[32px] lg:text-5xl text-center py-16 font-semibold">Cannot comment on your own blog.</p>
          ) : (
            <div>
                <div className="md:w-8/12 mx-auto ">
        <h2 className=" text[32px] md:text-5xl py-16 font-bold text-center bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
          Add Comments
        </h2>
       <form className="space-y-5" onSubmit={handleCommentSubmit}>
       <textarea
          placeholder="Add a Comment_"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="textarea textarea-bordered textarea-lg  w-full"
        ></textarea>
        
        <div className="space-y-5">
          <p className="text-[18px] px-7 py-4 border shadow-lg rounded-lg">
            <span className="font-bold">User Name : </span>
            <span> {user?.displayName}</span>
          </p>
          <p className="text-[18px] px-7 py-4 border shadow-lg rounded-lg">
            <span className="font-bold">Photo URL : </span>
            <span> {user?.photoURL}</span>
          </p>
        </div>
        <button className="w-full text-center py-4 font-bold bg-blue-500 text-white">Submit</button>
       </form>
      </div>
            </div>
          )} */}

{!user ? (
  <p className="text-red-500 text-[24px] text-center py-16 font-semibold">
    You need to <a href="/login" className="text-blue-500 underline">Login</a> to comment.
  </p>
) : user?.email === data?.hr_email ? (
  <p className="text-red-500 text-[32px] lg:text-5xl text-center py-16 font-semibold">
    Cannot comment on your own blog.
  </p>
) : (
  <div className="md:w-8/12 mx-auto">
    <h2 className="text-[32px] md:text-5xl py-16 font-bold text-center bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
      Add Comments
    </h2>
    <form className="space-y-5" onSubmit={handleCommentSubmit}>
      <textarea
        placeholder="Add a Comment_"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        className="textarea textarea-bordered textarea-lg w-full"
      ></textarea>

      <div className="space-y-5">
        <p className="text-[18px] px-7 py-4 border shadow-lg rounded-lg">
          <span className="font-bold">User Name : </span>
          <span> {user?.displayName}</span>
        </p>
        <p className="text-[18px] px-7 py-4 border shadow-lg rounded-lg">
          <span className="font-bold">Photo URL : </span>
          <span> {user?.photoURL}</span>
        </p>
      </div>
      <button className="w-full text-center py-4 font-bold bg-blue-500 text-white">
        Submit
      </button>
    </form>
  </div>
)}

      {/* Add Comments */}
      {/* <div className="md:w-8/12 mx-auto ">
        <h2 className=" text[32px] md:text-5xl py-16 font-bold text-center bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
          Add Comments
        </h2>
       <form className="space-y-5" onSubmit={handleCommentSubmit}>
       <textarea
          placeholder="Add a Comment_"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="textarea textarea-bordered textarea-lg  w-full"
        ></textarea>
        
        <div className="space-y-5">
          <p className="text-[18px] px-7 py-4 border shadow-lg rounded-lg">
            <span className="font-bold">User Name : </span>
            <span> {user?.displayName}</span>
          </p>
          <p className="text-[18px] px-7 py-4 border shadow-lg rounded-lg">
            <span className="font-bold">Photo URL : </span>
            <span> {user?.photoURL}</span>
          </p>
        </div>
        <button className="w-full text-center py-4 font-bold bg-blue-500 text-white">Submit</button>
       </form>
      </div> */}
    </div>
  );
};

export default BlogDetails;
