import React from "react";
import OurService from "../../assets/service.webp";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
const OurServices = () => {
  return (
    <div className="flex flex-1 border w-full rounded-lg h-[500px] justify-center items-center gap-16">
      <div className=" ">
        <img
          className="w-[600px] rounded-lg h-[500px] object-cover"
          src={OurService}
          alt=""
        />
        <img src="" alt="" />
      </div>
      <div className="flex-1 border h-full w-full md:pl-24 space-y-5">
        <h6 className="text-blue-800 mt-8 font-medium">OUR SERVICES</h6>
        <h2 className="text-4xl font-bold text-gray-800">
          Your Path to a Brighter, <br /> Healthier Smile Starts Here.
        </h2>
        <p className="mr-16 font-medium">
          Aliquam pellentesque quam aenean bibendum mollis per. Duis non rhoncus
          vulputate maximus enim ornare. Diam eu id rutrum lobortis netus neque
          integer venenatis letius libero a.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-3 pr-24">
          <button className=" py-3  rounded-lg border bg-gradient-to-r from-blue-100 to-blue-50 text-gray-800 flex items-center justify-center gap-2 "><BsArrowUpRightCircleFill  className="ml-3 items-center text-xl text-blue-600"/> <span className="font-semibold">Guaranteed Satisfaction</span></button>
          <button className=" py-3  rounded-lg border bg-gradient-to-r from-blue-100 to-blue-50 text-gray-800 flex items-center justify-center gap-2 "><BsArrowUpRightCircleFill  className="ml-3 items-center text-xl text-blue-600"/> <span className="font-semibold">Guaranteed Satisfaction</span></button>
          <button className=" py-3  rounded-lg border bg-gradient-to-r from-blue-100 to-blue-50 text-gray-800 flex items-center justify-center gap-2 "><BsArrowUpRightCircleFill  className="ml-3 items-center text-xl text-blue-600"/> <span className="font-semibold">Guaranteed Satisfaction</span></button>
          <button className=" py-3  rounded-lg border bg-gradient-to-r from-blue-100 to-blue-50 text-gray-800 flex items-center justify-center gap-2 "><BsArrowUpRightCircleFill  className="ml-3 items-center text-xl text-blue-600"/> <span className="font-semibold">Guaranteed Satisfaction</span></button>
          <button className=" py-3  rounded-lg border bg-gradient-to-r from-blue-100 to-blue-50 text-gray-800 flex items-center justify-center gap-2 "><BsArrowUpRightCircleFill  className="ml-3 items-center text-xl text-blue-600"/> <span className="font-semibold">Guaranteed Satisfaction</span></button>
          <button className=" py-3  rounded-lg border bg-gradient-to-r from-blue-100 to-blue-50 text-gray-800 flex items-center justify-center gap-2 "><BsArrowUpRightCircleFill  className="ml-3 items-center text-xl text-blue-600"/> <span className="font-semibold">Guaranteed Satisfaction</span></button>
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-blue-200 px-10 py-3 rounded-full text-white">Learn More</button>
      </div>
    </div>
  );
};

export default OurServices;
