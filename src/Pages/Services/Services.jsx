import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
const Services = () => {
  
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-out-quart", 
      // easing: "ease-in-out"
    });
  }, []);
    return (
        <div className="py-10"  >
          <div data-aos="zoom-in" data-aos-duration="1000" className="text-center space-y-4 pt-10">
            <h3 className="text-6xl font-semibold font-Playfair text-[#3d78e8]">
              Our Services
            </h3>
            <p className="md:px-48 text-[18px] font-Playfair">
              Your Trusted Partner for Premium Dental Solutions - Providing
              high-quality dental equipment, tools, and supplies to support
              professionals with reliable products, fast delivery, and seamless
              service.
            </p>
          </div>
          {/* <div className='relative '>
                    <div className='bg-blue-50 w-[420px] rounded-xl h-[300px] '>
                        <h2 className='text-4xl font-semibold p-6'>Zirconia Crown</h2>
                    </div>
                    <div className='z-50 left-[100px] -bottom-26 absolute'>
                        <img className='w-[420px] rounded-xl object-cover h-[310px]' src="https://www.avfdentalgroup.com/assets/img/blog/zirconia-dental-crown-benefits-min.jpg" alt="" />
                    </div>
                </div> */}
         <div  className="md:w-[80%] w-[95%] mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-12 font-dancing pb-24">
         <div data-aos="fade-up" data-aos-duration="1500" className="relative group my-20">
            <div className="bg-blue-50 w-[420px] rounded-md h-[300px] group-hover:bg-[#2d83c2] transition-colors duration-300">
              <h2 className="text-4xl font-semibold p-6 text-black group-hover:text-white transition-colors duration-300">
                Zirconia Crown
              </h2>
            </div>
            <div className="z-50 left-[100px] -bottom-28 absolute">
              <img
                className="w-[420px] rounded-md object-cover h-[310px]"
                src="https://www.avfdentalgroup.com/assets/img/blog/zirconia-dental-crown-benefits-min.jpg"
                alt="Zirconia Crown image"
              />
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="1500" className="relative group my-20">
            <div className="bg-blue-50 w-[420px] rounded-md h-[300px] group-hover:bg-[#2d83c2] transition-colors duration-300">
              <h2 className="text-4xl font-semibold p-6 text-black group-hover:text-white transition-colors duration-300">
                Dental Crown
              </h2>
            </div>
            <div className="z-50 left-[100px] -bottom-28 absolute">
              <img
                className="w-[420px] rounded-md object-cover h-[310px]"
                src="https://dental.cuanschutz.edu/images/librariesprovider253/patient-education/dentalcrown-gold-42.jpg?sfvrsn=f0d05ebb_0"
                alt="Dental Crown Image"
              />
            </div>
          </div>
          <div data-aos="fade-up" className="relative group my-20">
            <div className="bg-blue-50 w-[420px] rounded-md h-[300px] group-hover:bg-[#2d83c2] transition-colors duration-300">
              <h2 className="text-4xl font-semibold p-6 w-[110%] text-black group-hover:text-white transition-colors duration-300">
              Cast Partial frame work
              </h2>
            </div>
            <div className="z-50 left-[100px] -bottom-28 absolute">
              <img
                className="w-[420px] rounded-md object-cover h-[310px]"
                src="https://procaredental.co.in/wp-content/uploads/2016/11/Partial-Cast-Dentures..jpg"
                alt="Cast Partial frame work image"
              />
            </div>
          </div>
          <div data-aos="fade-up" className="relative group my-20">
            <div className="bg-blue-50 w-[420px] rounded-md h-[300px] group-hover:bg-[#2d83c2] transition-colors duration-300">
              <h2 className="text-4xl font-semibold p-6 text-black group-hover:text-white transition-colors duration-300">
              Temporary Implant...
              </h2>
            </div>
            <div className="z-50 left-[100px] -bottom-28 absolute">
              <img
                className="w-[420px] rounded-md object-cover h-[310px]"
                src="https://miamiperfectsmile.com/wp-content/uploads/2022/08/05-Temporary-or-removable-dental-prostheses-together-with-dentists-instruments-1024x683.jpg"
                alt="Temporary Implant image"
              />
            </div>
          </div>
          <div data-aos="fade-up" className="relative group my-20">
            <div className="bg-blue-50 w-[420px] rounded-md h-[300px] group-hover:bg-[#2d83c2] transition-colors duration-300">
              <h2 className="text-4xl font-semibold p-6 text-black group-hover:text-white transition-colors duration-300">
              Cad PFM
              </h2>
            </div>
            <div className="z-50 left-[100px] -bottom-28 absolute">
              <img
                className="w-[420px] rounded-md object-cover h-[310px]"
                src="https://images.51microshop.com/12001/product/20210608/PFM_Porcelain_Fused_Metal_1623135797401_1.jpg_w2048.jpg"
                alt="Cad PFM image"
              />
            </div>
          </div>
          <div data-aos="fade-up" className="relative group my-20">
            <div className="bg-blue-50 w-[420px] rounded-md h-[300px] group-hover:bg-[#2d83c2] transition-colors duration-300">
              <h2 className="text-4xl font-semibold p-6 text-black group-hover:text-white transition-colors duration-300">
              Only 3d printed...
              </h2>
            </div>
            <div className="z-50 left-[100px] -bottom-28 absolute">
              <img
                className="w-[420px] rounded-md object-cover h-[310px]"
                src="https://www.meditaustralia.com.au/wp-content/uploads/2023/06/Efficient-3D-Printed-Digital-Denture-Workflows-for-Dentists.jpg"
                alt="Only 3d printed image"
              />
            </div>
          </div>
          <div data-aos="fade-up" className="relative group my-20">
            <div className="bg-blue-50 w-[420px] rounded-md h-[300px] group-hover:bg-[#2d83c2] transition-colors duration-300">
              <h2 className="text-4xl font-semibold p-6 text-black group-hover:text-white transition-colors duration-300">
              Dental Inlay
              </h2>
            </div>
            <div className="z-50 left-[100px] -bottom-28 absolute">
              <img
                className="w-[420px] rounded-md object-cover h-[310px]"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThsCW0vmOg5qtXBsxHpkIbxPHDV8hOaF0Y0Q&s"
                alt="Dental Inlay image"
              />
            </div>
          </div>
         </div>
        </div>
      );
    };
    
export default Services;