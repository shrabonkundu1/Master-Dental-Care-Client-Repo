import React, { useState } from "react";
import newsLottiie from '../../lottie/login.json'
import Lottie from "lottie-react";
import Swal from "sweetalert2";


const Newsletter = () => {
  const [email,setEmail]= useState('');
  const handleSubscribe = (e) => {
    e.preventDefault();
    if(!email){
      Swal.fire({
        title: "Please enter a valid email!",
        icon: "error",
        draggable: true
      });
    }else{
      Swal.fire({
        title: "Thank you for subscribing to our newsletter",
        icon: "success",
        draggable: true
      });
      setEmail('')
    }
  }
  return (
    <div className="w-[90%] mx-auto flex flex-col md:flex-row gap-8 items-center py-16 md:py-24">
      <div className="space-y-4  ">
        <h1 className="text-[30px] md:text-4xl font-semibold  bg-gradient-to-r from-blue-600 to-blue-200 bg-clip-text text-transparent">Subscribe To Our Newsletter</h1>
        <p className="w-11/12 md:text-[18px] text-slate-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          id beatae minima possimus, molestias, ipsum iste at pariatur
          doloribus, nobis eius? Qui esse reiciendis aut.
        </p>
        <form onSubmit={handleSubscribe} className="flex ">
          <input
          type="email"
            className="border-2 rounded-l-lg pl-5 bg-gradient-to-r from-slate-100 to-blue-50 bg pr-14 md:pr-80 py-3 md:py-4"
            placeholder="Enter your email"
            onChange={(e) => {setEmail(e.target.value)}}
            name="email"
            value={email}
          />
          <button className="rounded-r-full border-2  px-5 pr-10 bg-blue-500 text-xl text-white font-bold">Subscribe</button>
        </form>
      </div>
      <div className="mr-40">
        <Lottie animationData={newsLottiie} loop={true}></Lottie>
      </div>
    </div>
  );
};

export default Newsletter;
