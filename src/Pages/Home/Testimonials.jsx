import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

const Testimonials = () => {
  return (
    <div>
      <h1 className="text-blue-600 text-center font-medium mb-5">
        TESTIMONIALS
      </h1>
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

        <div className="flex justify-center items-center gap-5 flex-col md:flex-row">
          <SwiperSlide className=" gap-5">
            <div className="flex ">
            <div className="max-w-md mx-auto  bg-white shadow-lg  p-6 text-center mt-16 md:mt-28">
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
                The teeth whitening treatment exceeded my expectations! Dr.
                Sarah was thorough in explaining the procedure and the results
                are amazing.
              </p>

              {/* Date */}
              <p className="mt-4 text-gray-400 font-semibold">Mar 15, 2024</p>
            </div>
            {/* ---------------2NO */}
            <div className=" hidden md:grid max-w-md mx-auto bg-white shadow-lg p-6 text-center mt-16 md:mt-28">
              {/* User Image */}
              <div className="relative flex justify-center">
                <div className="absolute -top-10 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img
                    src="data:image/png;base64,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"
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
                The teeth whitening treatment exceeded my expectations! Dr.
                Sarah was thorough in explaining the procedure and the results
                are amazing.
              </p>

              {/* Date */}
              <p className="mt-4 text-gray-400 font-semibold">Mar 15, 2024</p>
            </div>
            {/* -------------3NO */}
            <div className="max-w-md mx-auto hidden md:grid bg-white shadow-lg  p-6 text-center mt-16 md:mt-28">
              {/* User Image */}
              <div className="relative flex justify-center">
                <div className="absolute -top-10 w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img
                    src="data:image/jpeg;base64,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"
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
                The teeth whitening treatment exceeded my expectations! Dr.
                Sarah was thorough in explaining the procedure and the results
                are amazing.
              </p>

              {/* Date */}
              <p className="mt-4 text-gray-400 font-semibold">Mar 15, 2024</p>
            </div>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </div>
  );
};

export default Testimonials;
