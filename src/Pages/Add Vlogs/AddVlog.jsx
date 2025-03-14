import React, { useContext, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const AddVlog = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false)
  const axiosSecure = useAxiosSecure();

  const handleAddBlog = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());

    // --------post to server :
    // fetch('https://master-dental-server-side.vercel.app/blogs',{
    //   method: "POST",
    //   headers:{
    //     "content-type" : "application/json"
    //   },
    //   body: JSON.stringify(initialData)
    // })
    // .then(res => res.json())
    // .then(data => {
    //   if(data.insertedId){
    //     Swal.fire({
    //       title: "Blog Added Successfully",
    //       icon: "success",
    //       draggable: true
    //     });
    //     e.target.reset();
    //     navigate('/myPostedBlog')
    //   }
    // })

    axiosSecure.post("/blogs", initialData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            title: "Blog Added Successfully",
            icon: "success",
            draggable: true,
          });
          e.target.reset();
          navigate("/myPostedBlog");
        }
      })
  };
  if(loading) {
    return(
      <div className='min-h-screen flex justify-center items-center'>
        <span className="loading loading-ring loading-lg "></span>
      </div>
    )
  }
  return (
   <div className=" w-full bg-blue-100 py-10 md:py-16">
     <div className="card bg-blue-50 md:w-3/4 w-[95%] mx-auto my-16  shadow-2xl">
      <h2 className="md:text-5xl text-[32px] text-center font-bold py-8 md:py-16 heading font-Playfair">
        Create A New Blog
      </h2>
      <form onSubmit={handleAddBlog} className="card-body md:w-[90%] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
          {/* Company name   */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-xl">
                Blog Title
              </span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Blog Title"
              className="input input-bordered w-[335px] md:w-full"
              required
            />
          </div>
          {/* Company logo   */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-xl">Blog URL</span>
            </label>
            <input
              type="url"
              name="blog_url"
              placeholder="Blog Url"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
          {/* job category */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-xl">Category</span>
            </label>
            <select
              defaultValue ="Select category"
              name="category"
              className="select  select-bordered select-ghost w-full "
            >
              <option disabled>Select category</option>
              <option>Preventive Dentistry</option>
              <option>Restorative Dentistry</option>
              <option>Orthodontics</option>
              <option>Cosmetic Dentistry</option>
              <option>Pediatric Dentistry</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-xl">Deadline</span>
            </label>
            <input
              type="date"
              name="blogDeadline"
              placeholder=""
              className="input input-bordered"
              required
            />
          </div>
        </div>

        {/* hr section  */}
        <div className="grid items-end grid-cols-1 md:grid-cols-2 md:gap-8">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-xl">Hr Name</span>
            </label>
            <input
              defaultValue={user?.displayName}
              
              type="text"
              name="hr_name"
              placeholder="Input Hr name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-xl">Hr Email</span>
            </label>
            <input
              defaultValue={user?.email}
              type="email"
              name="hr_email"
              placeholder="Input Hr email"
              className="input input-bordered"
              required
            />
          </div>
        </div>

        {/* description  */}
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold text-xl">
              Description
            </span>
          </label>
          <textarea
            name="description"
            placeholder="Description"
            className="textarea textarea-bordered textarea-lg w-full "
          ></textarea>
        </div>

        <div className="form-control mt-6">
          <button className="w-full border rounded-lg py-4 hover:w-[98%] hover:mx-auto text-slate-50 bg-gradient-to-r  from-blue-600 to-blue-400 hover:scale-105 translate-2 transition-transform  font-bold">Submit</button>
        </div>
      </form>
    </div>
   </div>
  );
};

export default AddVlog;
