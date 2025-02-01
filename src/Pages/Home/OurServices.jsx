import React from "react";
import OurService from "../../assets/youre-as-fit-as-a-fiddle-shot-of-a-dentist-and-a-patient-using-a-tablet-in-a-office--1536x1025.jpg";
import OurService2 from "../../assets/teeth.jpg";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
const OurServices = () => {
  return (
    <div className="flex  md:flex-row w-full rounded-lg md:h-[500px] justify-center items-center gap-24 md:gap-16 flex-col-reverse  mt-24 md:mt-36 mb-24">
      <div className="relative ">
        <img
          className="md:w-[600px] rounded-lg md:h-[500px] object-cover"
          src={OurService}
          alt=""
        />
        <img
          className="md:w-64 md:h-48 w-44 h-28 object-cover border-8 border-blue-50 rounded-md absolute md:right-[-50px] right-[-20px] bottom-[-50px]"
          src={OurService2}
          alt=""
        />

        <div className="md:w-40 w-24 absolute top-[-40px] md:top-5 left-[-25px] md:left-5 bg-white md:rounded-lg rounded-r-lg shadow-lg text-center">
          <div className="bg-gradient-to-br from-blue-600 to-green-200 text-white md:text-lg font-semibold py-2 md:rounded-t-lg rounded-tr-lg">
            Excellent
          </div>
          <div className="flex justify-center mt-1 md:mt-3">
            <span className="text-blue-500 md:text-2xl">★★★★</span>
            <span className="text-gray-400 md:text-2xl">★</span>
          </div>
          <div className="md:text-4xl text-xl font-bold text-blue-600 md:mt-2">
            4.7
          </div>
          <div className="md:mt-3 mt-1  md:px-4 px-1 md:mb-5 mb-2 py-1 md:py-2 bg-blue-500 w-max text-center mx-auto text-[10px]  md:text-xs text-white rounded-full font-medium">
            Client Ratings
          </div>
        </div>
      </div>
      <div className="flex-1  h-full w-full md:pl-24 space-y-5">
        <h6 className="text-blue-800 mt-5 font-medium">OUR SERVICES</h6>
        <h2 className="md:text-4xl text-[32px] font-bold text-gray-800">
          Your Path to a Brighter, <br /> Healthier Smile Starts Here.
        </h2>
        <p className="md:mr-16 font-medium">
          Aliquam pellentesque quam aenean bibendum mollis per. Duis non rhoncus
          vulputate maximus enim ornare. Diam eu id rutrum lobortis netus neque
          integer venenatis letius libero a.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-2 items-center gap-3 md:pr-24">
          <button className=" py-3  rounded-lg border bg-gradient-to-r from-blue-100 to-blue-50 text-gray-800 flex items-center justify-center gap-2 ">
            <BsArrowUpRightCircleFill className="ml-3 items-center text-xl text-blue-600" />{" "}
            <span className="font-semibold">Guaranteed Satisfaction</span>
          </button>
          <button className=" py-3  rounded-lg border bg-gradient-to-r from-blue-100 to-blue-50 text-gray-800 flex items-center justify-center gap-2 ">
            <BsArrowUpRightCircleFill className="ml-3 items-center text-xl text-blue-600" />{" "}
            <span className="font-semibold">Guaranteed Satisfaction</span>
          </button>
          <button className=" py-3  rounded-lg border bg-gradient-to-r from-blue-100 to-blue-50 text-gray-800 flex items-center justify-center gap-2 ">
            <BsArrowUpRightCircleFill className="ml-3 items-center text-xl text-blue-600" />{" "}
            <span className="font-semibold">Guaranteed Satisfaction</span>
          </button>
          <button className=" py-3  rounded-lg border bg-gradient-to-r from-blue-100 to-blue-50 text-gray-800 flex items-center justify-center gap-2 ">
            <BsArrowUpRightCircleFill className="ml-3 items-center text-xl text-blue-600" />{" "}
            <span className="font-semibold">Guaranteed Satisfaction</span>
          </button>
          <button className=" py-3  rounded-lg border bg-gradient-to-r from-blue-100 to-blue-50 text-gray-800 flex items-center justify-center gap-2 ">
            <BsArrowUpRightCircleFill className="ml-3 items-center text-xl text-blue-600" />{" "}
            <span className="font-semibold">Guaranteed Satisfaction</span>
          </button>
          <button className=" py-3  rounded-lg border bg-gradient-to-r from-blue-100 to-blue-50 text-gray-800 flex items-center justify-center gap-2 ">
            <BsArrowUpRightCircleFill className="ml-3 items-center text-xl text-blue-600" />{" "}
            <span className="font-semibold">Guaranteed Satisfaction</span>
          </button>
        </div>
        <button className="bg-gradient-to-r from-blue-600 to-blue-200 px-10 py-3 rounded-full text-white">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default OurServices;
