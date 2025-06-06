
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
import BlogDetails from "../Pages/My Posted Vlogs/BlogDetails";
import FeaturedBlogs from "../Pages/Featured Blogs/FeaturedBlogs";
import UpdateBlog from "../Pages/Add Vlogs/UpdateBlog";
import PrivateRoute from "../Router/PrivateRoute";
import ViewComments from "../Pages/My Posted Vlogs/ViewComments";
import ErrorPage from "../Pages/Error/ErrorPage";
import CommentsPage from "../Pages/Comments/CommentsPage";
import Services from "../Pages/Services/Services";
import AboutUs from "../Pages/About/AboutUs";
import About from "../Pages/About/About";


const router = createBrowserRouter([
    {
      path: "",
      element: <MainLayouts></MainLayouts>,
      errorElement: <ErrorPage></ErrorPage>,
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
            element: <PrivateRoute><AddVlog></AddVlog></PrivateRoute>,
        },
        {
            path: "/services",
            element: <Services></Services>,
        },            
        {
            path: "/aboutUs",
            element: <About></About>
        },            
        {
            path: "/myPostedBlog",
            element: <PrivateRoute><MyPostedVlogs></MyPostedVlogs></PrivateRoute>,
        },
        {
            path: "/myWishlist",
            element:<PrivateRoute> <Wishlist></Wishlist></PrivateRoute>,
        },
        {
            path: "/blogs/:id",
            element: <BlogDetails></BlogDetails>,
            loader: ({params}) => fetch(`https://master-dental-server-side.vercel.app/blogs/${params.id}`)
        },
        {
            path: "/updateBlog/:id",
            element: <PrivateRoute><UpdateBlog></UpdateBlog></PrivateRoute>,
        },
        {
            path: "/viewComment/:blog_id",
            element: <PrivateRoute><ViewComments></ViewComments></PrivateRoute>,
        },
        {
            path: "/comments/:id",
            element: <PrivateRoute><CommentsPage></CommentsPage></PrivateRoute>,
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