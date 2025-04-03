import React, { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../Context/AuthContext";
import Swal from "sweetalert2";
import AOS from "aos";
import "aos/dist/aos.css";

const RecentBlogCard = ({ blog }) => {
  const { _id,title, blog_url, category, blogDeadline } = blog;
  const {user} = useContext(AuthContext);
  const navigate = useNavigate()
const {id} = useParams()
  const handleAddToWishlist = () =>{
    const blogData =  {
      blog_id : id,
      hr_email : user?.email,
      title : title,
      category: category,
      blog_url : blog_url,
      deadline : blogDeadline
    }

    fetch(`https://master-dental-server-side.vercel.app/myWishlist?email=${user.email}`,{
      method:'POST',
      headers: {
          'Content-Type':"application/json"
      },
      body: JSON.stringify(blogData)
  })
  .then(res => res.json())
  .then(data => {
     if(data.insertedId){
      Swal.fire({
          position: "center",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1200
        });
        navigate('/myWishlist')
     }
        
  })  }

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-out-quart", 
      // easing: "ease-in-out"
    });
  }, []);
  return (
    <div data-aos="fade-up">
      <div className="card card-compact rounded-md group  px-1 py-2 border border-[#a0d6f3] bg-[#f3f7fd] hover:bg-white duration-1800 transition  hover:translate-y-[-4px]">
        <figure>
          <img
          className="w-full object-cover rounded-sm h-52"
            src={blog_url}
            alt="Shoes"
          />
        </figure>
        <div className="card-body space-y-1">
          <h2 className="card-title font-bold">{title}</h2>
          <p><span className="font-medium">Category:</span> {category}</p>
          <p><span className="font-medium">Deadline:</span> {blogDeadline}</p>
          <div className="card-actions flex gap-3 justify-end">
           <Link to={`/blogs/${_id}`}> <button className="w-max py-3 px-10 md:px-16 border rounded-full  text-slate-50 bg-gradient-to-r  from-blue-600 to-blue-400  translate-2 transition-transform  font-bold hover:scale-105">Details</button></Link>
            <button onClick={handleAddToWishlist} className="w-max py-3 border rounded-full  text-slate-50 bg-gradient-to-r  from-blue-400 to-blue-700  translate-2 transition-transform  font-bold hover:scale-105 px-10 md:px-16">Wishlist</button>
          </div>
        </div>
      </div>
    </div>

//     <div className="card card-compact rounded-md group  px-1 py-2 border border-[#a0d6f3] bg-[#f3f7fd] hover:bg-white duration-1800 transition  hover:translate-y-[-4px]">
//     <div className="flex items-center p-2 gap-2">
//       <figure>
//         <img className="w-16"  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt={company} />
//       </figure>
//       <div>
//         <h2 className="text-[22px] font-bold hover:text-[#4b68fd]">{title}</h2>

//       </div>
//     </div>
//     <div className="card-body">
//       <h2 className="text-[18px] font-bold hover:text-[#4b68fd]">{title}</h2>
//       <p className="text-gray-500 font-medium my-2">{description}</p>
//       <div className="flex items-center gap-2 flex-wrap text-gray-500">
//         {requirements.map((skill,index) => (
//           <p key={index} className="border bg-slate-100  rounded-md p-2 text-center">
//             {skill}
//           </p>
//         ))}
//       </div>
//       <div className="card-actions justify-end items-center ">
//         <p className="border rounded-md bg-slate-100 py-3 p-1 text-[#0077b6] font-semibold text-[16px]">
//           Salary:  {salaryRange.min} - {salaryRange.max} 
//         </p>
//         <Link to={`/jobs/${_id}`}>
//         <button className="btn btn-outline border-[#0077b6] group-hover:bg-[#0077b6] group-hover:text-white ">Apply</button>
//         </Link>
//       </div>
//     </div>
//   </div>
  );
};

export default RecentBlogCard;
