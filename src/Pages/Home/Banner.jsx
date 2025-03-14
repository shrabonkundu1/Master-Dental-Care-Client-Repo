import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCode } from "react-icons/fa";
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner5 from "../../assets/banner5.jpg";
import { motion } from "motion/react";
import { easeInOut } from "motion";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" md:w-full mx-auto bg-blue-50 ">
      <div>
        <Slider className="w-full mx-auto " {...settings}>
          <div>
            <div className="grid justify-center md:w-[85%] mx-auto grid-cols-1 md:grid-cols-2 border-0 items-center  md:min-h-[550px] min-h-[550px]  md:gap-28  p-5 rounded-lg ">
              <div className="md:space-y-8 space-y-4">
                <motion.h2
                  initial={{ y: 170, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 1.3, delay: 0, ease: easeInOut }}
                  className="md:text-5xl sm:text-4xl text-[30px] lg:text-5xl font-bold font-Playfair  leading-10"
                >
                  Transform
                  <span className="bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent mx-5 ">
                    Your Smile
                  </span>{" "}
                  With Master Dental Care
                </motion.h2>
                <motion.p
                  animate={{ y: [100, 0] }}
                  transition={{ duration: 1.4, delay: 0, ease: easeInOut }}
                  className="text-slate-500 md:text-xl "
                >
                  Experience world-class dental care with our team of
                  professionals. Your journey to a perfect smile begins with
                  just one click.
                </motion.p>
                <motion.div
                  className="flex gap-3"
                >
                  <motion.button animate={{ y: [80, 0] }}
                     transition={{ duration: 1.4, delay: 0, ease: easeInOut }}
                      className="md:px-7 px-4 rounded-full text-slate-50 bg-gradient-to-r  from-blue-600 to-blue-400  border py-2 md:py-4">
                    Book Appointment
                  </motion.button>
                  <motion.button animate={{ y: [80, 0] }}
                     transition={{ duration: 1.4, delay: 0, ease: easeInOut }} className="md:px-7 px-4  rounded-full text-blue-500 border-blue-600 border-2  py-2 md:py-4">
                    view Treatments
                  </motion.button>
                </motion.div>
              </div>
              <div className=" flex relative ">
                {/* <img className="w-[300px] rounded-lg" src={banner1} alt="" />
                <img className="w-[300px] rounded-lg" src={banner2} alt="" /> */}
                <motion.img
                  animate={{ y: [-60, -30, -60] }}
                  transition={{ duration: 4, delay: 0, repeat: Infinity }}
                  className="md:w-[350px] w-60 h-40 md:h-72 rounded-t-[60px] border-l-8 border-b-8 border-blue-600 object-cover"
                  src={banner1}
                  alt=""
                />
                
                <motion.img
                  animate={{ x: [70, 100, 70] }}
                  transition={{ duration: 4, delay: 0, repeat: Infinity }}
                  className="grid lg:hidden md:w-[330px] w-60 h-40 md:h-52 rounded-t-[60px] rounded-r-[60px] border-l-8 border-b-8 absolute top-10 md:top-[130px] border-blue-600"
                  src={banner2}
                  alt=""
                />
              </div>
            </div>
          </div>
          {/* 2 */}

          <div>
            <div className="flex items-center  gap-3   rounded-lg ">
              <div
                className="hero min-h-[550px]  w-full"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co.com/bR51GFJ3/beauty-canal-assistant-background-care.jpg)",
                }}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-neutral-content text-center">
                  <div className="space-y-5">
                    <motion.h2
                      initial={{ y: 170, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1.3, delay: 3.5, ease: easeInOut }}
                      className="md:text-5xl sm:text-4xl text-[32px] text-white lg:text-5xl font-bold font-Playfair leading-10"
                    >
                     <span className="mb-10 bg-gradient-to-r from-blue-200 to-blue-50 bg-clip-text text-transparent "> <span>Transform</span>
                      <span className="bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent md:mx-5 ">
                        Your Smile
                      </span></span><br />
                      <span className=" bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent ">With Master Dental Care</span>
                    </motion.h2>{" "}
                    <motion.p
                      animate={{ y: [100, 0] }}
                      transition={{ duration: 1.4, delay: 3.5, ease: easeInOut }}
                      className="bg-gradient-to-r from-blue-200 to-blue-50 bg-clip-text text-transparent hite md:mx-48 text-xl  text-center"
                    >
                      Experience world-class dental care with our team of
                      professionals. Your journey to a perfect smile begins with
                      just one click.
                    </motion.p>
                    <motion.button 
                     animate={{ y: [80, 0] }}
                     transition={{ duration: 1.4, delay: 3.5, ease: easeInOut }} className="px-12 rounded-full hover:bg-gradient-to-r  hover:from-blue-200 hover:to-blue-50 hover:text-blue-600 text-slate-50 bg-gradient-to-r  from-blue-600 to-blue-400  border py-4">
                  View Services
                  </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 3 */}
          <div>
            <div className="flex items-center  gap-3   rounded-lg ">
              <div
                className="hero min-h-[550px]  w-full"
                style={{
                  backgroundImage:
                    "url(https://i.ibb.co.com/FkfQHS4W/half-face-portrait-smiling-woman.jpg)",
                }}
              >
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-neutral-content ">
                  <div className="space-y-5">
                    <motion.h2
                      initial={{ y: 170, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 1.3, delay: 6.7, ease: easeInOut }}
                      className="md:text-5xl sm:text-4xl text-left text-[32px] text-white lg:text-5xl font-bold font-dancing leading-10"
                    >
                     <span className="mb-10 bg-gradient-to-r from-blue-200 to-blue-50 bg-clip-text text-transparent "> Transform
                      <span className="bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent mx-5 ">
                        Your Smile
                      </span></span><br />
                      <span className="mt-16 bg-gradient-to-r from-blue-100 to-white bg-clip-text text-transparent ">With Master Dental Care</span>
                    </motion.h2>{" "}
                    <motion.p
                      animate={{ y: [100, 0] }}
                      transition={{ duration: 1.4, delay: 6.7, ease: easeInOut }}
                      className="bg-gradient-to-r text-left from-blue-200 to-blue-50 bg-clip-text text-transparent hite w-3/4  text-xl  "
                    >
                      Experience world-class dental care with our team of
                      professionals. Your journey to a perfect smile begins with
                      just one click.
                    </motion.p>
                    <motion.button 
                     animate={{ y: [80, 0] }}
                     transition={{ duration: 1.4, delay: 6.7, ease: easeInOut }} className="px-12 rounded-full hover:bg-gradient-to-r  hover:from-blue-200 hover:to-blue-50 hover:text-blue-600 text-slate-50 bg-gradient-to-r  from-blue-600 to-blue-400  border py-4">
                  View Services
                  </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Banner;
