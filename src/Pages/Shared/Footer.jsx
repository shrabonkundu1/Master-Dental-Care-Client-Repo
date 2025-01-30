


import { FaFacebook, FaInstagram, FaYoutubeSquare } from "react-icons/fa";
import { Cursor, Typewriter } from "react-simple-typewriter";

const Footer = () => {
  return (
    <div className="   pt-16">
      <h2 className="flex text-3xl items-center ml-2 md:ml-0 md:justify-center  gap-5 font-semibold  mx-auto">
        {/* <img className="h-16 w-16 rounded-xl" src={logo} alt="" /> */}
        <p className="text-4xl font-bold md:text-5xl text-red-100">
          <span className="text-[#0077b6] ">
            <Typewriter
              words={[" Master Dental Care"]}
              loop={8}
              typeSpeed={100}
              deleteSpeed={80}
            ></Typewriter>
          </span>
          <span className="text-blue-900">
            <Cursor cursorStyle="_"></Cursor>
          </span>
        </p>
      </h2>
      <p className="md:text-center text-blue-700  w-[95%] md:w-3/5 mx-auto my-5 ">
        Save more with ease! Collect exclusive coupons, enjoy amazing discounts,
        and make every purchase rewarding. Stay connected with us for updates
        and offers tailored just for you.
      </p>

      <footer className="md:flex justify-between items-center py-10 md:py-0 px-2 md:px-10  md:p-10 md:w-[90%] mx-auto text-blue-800">
        <nav className="flex flex-col mb-10 md:mb-0 ">
          <h6 className="text-2xl font-medium">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col mb-10 md:mb-0 space-y-1">
          <h6 className="text-2xl font-medium">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <div className="space-y-2 mb-2 ">
          <h2 className="text-2xl font-medium ">Contact us</h2>
          <p className="text-xl ">shrabonkundu@gmail.com</p>
          <p className="text-xl ">Mobile no: 01581575658</p>
          <nav>
            <div className="flex gap-8">
              <a href="https://www.facebook.com/shyam.kundu.9822">
                <FaFacebook className="text-3xl" />
              </a>
              <a href="https://www.instagram.com/kundushrabon/?hl=en">
                <FaInstagram className="text-3xl" />
              </a>
              <a href="https://www.youtube.com/@shrabonkundu4201">
                <FaYoutubeSquare className="text-3xl" />
              </a>
            </div>
          </nav>
        </div>
      </footer>
      <div className="bg-gradient-to-r from-[#060c3b] to-[#010314]">
        <div className="border-t border-slate-400 my-4    "></div>
      </div>
      <footer className="footer footer-center  text-base-content p-4">
        <aside>
          <p className="w-[70%] md:w-full text-blue-900 font-medium text-center">
            Copyright © {new Date().getFullYear()} - All right reserved by
            Master Dental Care Team.
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
