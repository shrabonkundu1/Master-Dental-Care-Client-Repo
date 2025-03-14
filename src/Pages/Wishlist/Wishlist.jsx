import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/AuthContext";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { MdDeleteForever } from "react-icons/md";

const Wishlist = () => {
  const [Wishlist, setWishlist] = useState([]);
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  const axiosSecure = useAxiosSecure();
  useEffect(() => {
    setLoading(true);
    // fetch(`https://master-dental-server-side.vercel.app/myWishlist?email=${user?.email}`)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setWishlist(data);
    //   });

    //   axios.get(`https://master-dental-server-side.vercel.app/myWishlist?email=${user?.email}` , {withCredentials: true})
    //   .then(res => setWishlist(res.data))
    axiosSecure.get(`/myWishlist?email=${user?.email}`).then((res) => {
      setWishlist(res.data);
      setLoading(false);
    });
  }, [user?.email]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <span className="loading loading-ring loading-lg "></span>
      </div>
    );
  }
  const handleDeleteWishlist = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://master-dental-server-side.vercel.app/myWishlist/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your blog has been deleted.",
                icon: "success",
              });
              const remaining = Wishlist.filter((data) => data._id !== _id);
              setWishlist(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <h2 className="mt-36 font-bold text-[32px] lg:text-5xl md:text-4xl text-center font-Playfair">
        My Wishlist 
      </h2>

      <div className="overflow-x-auto">
        <table className="table my-16 w-[90%] mx-auto">
          <thead className="">
            <tr className="font-semibold text-xl text-gray-800">
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Deadline</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {Wishlist.map((data) => (
              <tr key={data._id}>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask rounded-lg h-20 w-20">
                        <img src={data.blog_url} alt={data.title} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{data.title}</td>
                <td>{data.category}</td>
                <td>{data.deadline}</td>
                <td>
                  <div>
                    <button
                      onClick={() => handleDeleteWishlist(data._id)}
                      className="btn btn-ghost btn-xs text-red-700 text-2xl"
                    >
                      <MdDeleteForever />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
