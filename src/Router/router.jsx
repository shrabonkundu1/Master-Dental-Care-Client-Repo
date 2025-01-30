
import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayouts from "../Layout/MainLayouts";
import Home from "../Pages/Home/Home";
import AllVlogs from "../Pages/All Vlogs/AllVlogs";
import AddVlog from "../Pages/Add Vlogs/AddVlog";
import MyPostedVlogs from "../Pages/My Posted Vlogs/MyPostedVlogs";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Login from "../Pages/Secure/Login";
import SignUp from "../Pages/Secure/SignUp";


const router = createBrowserRouter([
    {
      path: "",
      element: <MainLayouts></MainLayouts>,
      errorElement: <h2>Routes not found</h2>,
      children : [
        {
            path: "/",
            element: <Home></Home>,
        },
        {
            path: "/allBlog",
            element: <AllVlogs></AllVlogs>,
        },
        {
            path: "/addBlog",
            element: <AddVlog></AddVlog>,
        },
        {
            path: "/myPostedBlog",
            element: <MyPostedVlogs></MyPostedVlogs>,
        },
        {
            path: "/myWishlist",
            element: <Wishlist></Wishlist>,
        },
        {
            path: "/login",
            element: <Login></Login>,
        },
        {
            path: "/signUp",
            element: <SignUp></SignUp>,
        },
      ]
    },
  ]);

  export default router;