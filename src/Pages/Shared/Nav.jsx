import React, { useContext, useEffect } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
// import { useFirebaseAuth } from '../Auth/AuthProvider';
import { FaHome, FaUser, FaUserPlus, FaSignInAlt } from "react-icons/fa";

import { MdAddBox } from "react-icons/md";
import { VscOpenPreview } from "react-icons/vsc";

// import { useFirebaseAuth } from "../hooks/useAuth";
import { RiUserReceivedLine } from "react-icons/ri";
import { FaRegSave } from "react-icons/fa";
import logo from "../../assets/logo.png";
import AuthContext from "../../Context/AuthContext";
import { CgLogIn } from "react-icons/cg";
import { TbLogout2 } from "react-icons/tb";
import { SiSecurityscorecard } from "react-icons/si";
import Swal from "sweetalert2";

const Nav = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState(location.pathname);
  //   const { user, logOut, loading } = useFirebaseAuth();
  const { user, loading,logOutUser } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const getLinkStyle = (path) => `
    relative px-2 py-2 text-sm font-bold    transition-colors duration-200
    ${activeLink === path ? "text-[#336dec]" : ""}

    before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
    before:bg-[#2563eb] before:transform before:scale-x-0 before:transition-transform
    before:duration-300 hover:before:scale-x-100
    ${activeLink === path ? "before:scale-x-100" : ""}
  `;

  const isProfileActive = [
    "/my-profile",
    "/post-for-volunteer",
    "/ManageMyPostRequest",
  ].includes(activeLink);



  const handleLogout = () => {
    logOutUser()
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Logged out successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        toast.error("Logout failed. Please try again.", {
          position: "top-center",
        });
      });
  };

  return (
    <nav className="font_header  backdrop-blur-md fixed w-full shadow-lg top-0 z-50 ">
      <div className="w-10/12 mx-auto px-2 sm:px-2 lg:px-2">
        <div className="flex justify-between items-center h-16">
          {/* logo  */}
          <div className="flex flex-shrink-0 items-center  gap-1 sm:gap-4">
            <Link to="/" className="flex items-center  space-x-1">
              <img
                className="block md:hidden lg:block   w-14 h-14 bg-transparent"
                src={logo}
                alt="Logo"
              />
              <span className="text-3xl sm:text-3xl md:text-3xl lg:text-3xl text-md font-bold text bg-gradient-to-r from-blue-700 to-blue-400 bg-clip-text text-transparent">
                Dental Care
              </span>
            </Link>

            {/* <div className="md:hidden ">
              <DarkModeToggle></DarkModeToggle>
            </div> */}
          </div>
          {/* logo end */}

          {/* Navigation Links - Center */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <Link
              to="/"
              className={getLinkStyle("/")}
              onClick={() => setActiveLink("/")}
            >
              <FaHome className="lg:inline-block mr-1" /> Home
            </Link>

            <Link
              to="/allBlog"
              className={getLinkStyle("/allBlog")}
              onClick={() => setActiveLink("/allBlog")}
            >
              <VscOpenPreview className="lg:inline-block mr-1" /> All Blog
            </Link>

            <div
              className={`dropdown dropdown-bottom ${
                isProfileActive ? "active-class" : ""
              }`}
            >
              <div
                tabIndex={0}
                role="button"
                className={`px-4 py-2 cursor-pointer font-semibold ${
                  isProfileActive
                    ? `text-[#336dec]  border-b-[3px] border-[#2563eb]`
                    : ` hover:text-[#336dec]  `
                }`}
                onClick={() => setActiveLink("/my-profile")}
              >
                My Profile
              </div>
              <ul
                tabIndex={0}
                className={`dropdown-content       rounded-box z-[1] w-52 p-5 space-y-3 shadow`}
              >
                <li className="my-1 ">
                  <Link
                    to="/addBlog"
                    className={`${getLinkStyle("/addBlog")} rounded-none `}
                  >
                    Add Blog
                  </Link>
                </li>
                <li className="my-1">
                  <Link
                    to="/myPostedBlog"
                    className={`${getLinkStyle("/myPostedBlog")} rounded-none`}
                  >
                    My Posted Blog
                  </Link>
                </li>
                {/* <li className="my-1">
                  <Link
                    to="/received-request"
                    className={`${getLinkStyle(
                      "/received-request"
                    )} rounded-none`}
                  >
                    Received Request
                  </Link>
                </li> */}
                <li className="my-1">
                  <Link
                    to="/myWishlist"
                    className={`${getLinkStyle("/myWishlist")} rounded-none`}
                  >
                    My Wishlist
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* center links end */}

          {/*  */}

          <div className="md:flex hidden items-center space-x-4">
            {user ? (
              <div className="flex items-center gap-3 space-x-2">
                <img
                  src={user.photoURL || "/default-avatar.png"}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full"
                />
                <button
                  onClick={handleLogout}
                  className="text-sm text-[#2a66eb] font-bold flex items-center gap-1 border hover:text-white border-[#0077b6] p-3 rounded-md hover:bg-[#2a66eb]"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className={getLinkStyle("/login")}>
                  Login
                </Link>
                <Link to="/signUp" className={getLinkStyle("/signUp")}>
                  Sign Up
                </Link>
              </div>
            )}
          </div>
          {/*  */}

          <div className="md:hidden flex items-center ml-2">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-1 rounded-md text-[#336dec] hover:text-[#2563eb]  focus:outline-none focus:ring-1 focus:ring-inset focus:ring-[#336dec]"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* second */}

      <div
        className={`
          md:hidden fixed  top-16 bg-white shadow-lg
          transform transition-all duration-300 ease-in-out z-100
          ${
            isMobileMenuOpen
              ? "translate-y-0 opacity-100 visible"
              : "-translate-y-full opacity-0 invisible"
          }
        `}
      >
        <div className="absolute inset-0 bg-blue-50" />

        <div className="relative px-4 pt-2 pb-3 space-y-2">
          <Link
            to="/"
            className={`block ${getLinkStyle("/")}`}
            onClick={() => {
              setActiveLink("/");
              setIsMobileMenuOpen(false);
            }}
          >
            <FaHome className="inline-block mr-1" /> Home
          </Link>

          <Link
            to="/allBlog"
            className={`block ${getLinkStyle("/allBlog")}`}
            onClick={() => {
              setActiveLink("/allBlog");
              setIsMobileMenuOpen(false);
            }}
          >
            <VscOpenPreview className="inline-block mr-1" /> All Blog
          </Link>

          <Link
            to="/addBlog"
            className={`block ${getLinkStyle("/addBlog")}`}
            onClick={() => {
              setActiveLink("/add-blog");
              setIsMobileMenuOpen(false);
            }}
          >
            <MdAddBox className="inline-block mr-1" /> Add Blog
          </Link>

          <Link
            to="/myPostedBlog"
            className={`block ${getLinkStyle("/myPostedBlog")}`}
            onClick={() => {
              setActiveLink("/myPostedBlog");
              setIsMobileMenuOpen(false);
            }}
          >
            <FaUser className="inline-block mr-1" /> My Posted Blog
          </Link>
          {/* 
          <Link
            to="/received-request"
            className={`block ${getLinkStyle("/received-request")}`}
            onClick={() => {
              setActiveLink("/received-request");
              setIsMobileMenuOpen(false);
            }}
          >
            <RiUserReceivedLine className="inline-block mr-1" />
            Received Request
          </Link> */}

          <Link
            to="/myWishlist"
            className={`block ${getLinkStyle("/myWishlist")}`}
            onClick={() => {
              setActiveLink("/myWishlist");
              setIsMobileMenuOpen(false);
            }}
          >
            <FaRegSave className="inline-block mr-1" />
            My Wishlist
          </Link>

          {user && (
            <>
              <Link
                to="/my-profile"
                className={`block ${getLinkStyle("/my-profile")}`}
                onClick={() => {
                  setActiveLink("/my-profile");
                  setIsMobileMenuOpen(false);
                }}
              >
                <FaUser className="inline-block mr-1" /> Profile
              </Link>
            </>
          )}

          {user && (
            <div className="flex items-center gap-3 space-x-2">
              <img
                src={user.photoURL || "/default-avatar.png"}
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <button
                onClick={handleLogout}
                className="text-sm text-[#0077b6] font-bold flex items-center gap-1 border hover:text-white border-[#0077b6] p-3 rounded-md hover:bg-[#0077b6]"
              >
                <TbLogout2 size={19} />
                Logout
              </button>
            </div>
          )}
          {/* Add login button for mobile */}
          {!user && (
            <Link
              to="/login"
              className={`block ${getLinkStyle("/login")}`}
              onClick={() => {
                setActiveLink("/login");
                setIsMobileMenuOpen(false);
              }}
            >
              <FaSignInAlt className="inline-block mr-1" /> Login
            </Link>
          )}

          {!user && (
            <Link
              to="/signUp"
              className={`block ${getLinkStyle("/signUp")}`}
              onClick={() => {
                setActiveLink("/signUp");
                setIsMobileMenuOpen(false);
              }}
            >
              <FaUserPlus className="inline-block mr-1" /> Sign UP
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Nav;
