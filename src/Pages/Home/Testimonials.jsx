import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";


const Testimonials = () => {
  return (
    <div >
      <h1 className="text-blue-600 text-center font-medium mb-5">TESTIMONIALS</h1>
      <h2 className="text-[32px] md:text-5xl font-bold text-center">
        What Our Patients Say
      </h2>

      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 3000 }}
        loop={true}
        className="pb-10"
    >

      {/* ----------------1NO */}

     <div className="flex ">
     <SwiperSlide className="flex gap-5">

<div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 text-center mt-16 md:mt-28">
  {/* User Image */}
  <div className="relative flex justify-center">
    <div className="absolute -top-10 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="User"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Star Ratings */}
  <div className="mt-6 flex justify-center">
    <div className="bg-white shadow-md px-4 py-1 rounded-full flex gap-1">
      <span className="text-yellow-400 text-lg">★</span>
      <span className="text-yellow-400 text-lg">★</span>
      <span className="text-yellow-400 text-lg">★</span>
      <span className="text-yellow-400 text-lg">★</span>
      <span className="text-yellow-400 text-lg">★</span>
    </div>
  </div>

  {/* Review Text */}
  <p className="text-gray-600 mt-4 text-lg font-medium">
    <span className="text-blue-400 text-2xl font-bold">"</span>
    The teeth whitening treatment exceeded my expectations! Dr. Sarah was
    thorough in explaining the procedure and the results are amazing.
  </p>

  {/* Date */}
  <p className="mt-4 text-gray-400 font-semibold">Mar 15, 2024</p>
</div>
{/* ---------------2NO */}
<div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 text-center mt-16 md:mt-28">
  {/* User Image */}
  <div className="relative flex justify-center">
    <div className="absolute -top-10 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="User"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Star Ratings */}
  <div className="mt-6 flex justify-center">
    <div className="bg-white shadow-md px-4 py-1 rounded-full flex gap-1">
      <span className="text-yellow-400 text-lg">★</span>
      <span className="text-yellow-400 text-lg">★</span>
      <span className="text-yellow-400 text-lg">★</span>
      <span className="text-yellow-400 text-lg">★</span>
      <span className="text-yellow-400 text-lg">★</span>
    </div>
  </div>

  {/* Review Text */}
  <p className="text-gray-600 mt-4 text-lg font-medium">
    <span className="text-blue-400 text-2xl font-bold">"</span>
    The teeth whitening treatment exceeded my expectations! Dr. Sarah was
    thorough in explaining the procedure and the results are amazing.
  </p>

  {/* Date */}
  <p className="mt-4 text-gray-400 font-semibold">Mar 15, 2024</p>
</div>
{/* -------------3NO */}
<div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6 text-center mt-16 md:mt-28">
  {/* User Image */}
  <div className="relative flex justify-center">
    <div className="absolute -top-10 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
      <img
        src="https://randomuser.me/api/portraits/women/44.jpg"
        alt="User"
        className="w-full h-full object-cover"
      />
    </div>
  </div>

  {/* Star Ratings */}
  <div className="mt-6 flex justify-center">
    <div className="bg-white shadow-md px-4 py-1 rounded-full flex gap-1">
      <span className="text-yellow-400 text-lg">★</span>
      <span className="text-yellow-400 text-lg">★</span>
      <span className="text-yellow-400 text-lg">★</span>
      <span className="text-yellow-400 text-lg">★</span>
      <span className="text-yellow-400 text-lg">★</span>
    </div>
  </div>

  {/* Review Text */}
  <p className="text-gray-600 mt-4 text-lg font-medium">
    <span className="text-blue-400 text-2xl font-bold">"</span>
    The teeth whitening treatment exceeded my expectations! Dr. Sarah was
    thorough in explaining the procedure and the results are amazing.
  </p>

  {/* Date */}
  <p className="mt-4 text-gray-400 font-semibold">Mar 15, 2024</p>
</div>

</SwiperSlide>
     </div>
      </Swiper>

      
    </div>
  );
};

export default Testimonials;
