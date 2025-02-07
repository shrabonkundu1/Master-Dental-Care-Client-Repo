import axios from "axios";
import React, { useContext, useEffect } from "react";
// import useAuth from '.';
import { useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

const axiosInstance = axios.create({
  baseURL: "https://master-dental-server-side.vercel.app",
  withCredentials: true,
});
const useAxiosSecure = () => {
  const { logOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
          logOutUser()
            .then(() => {
              navigate("/login");
            })
            .catch((err) => console.log(err));
        }
        return Promise.reject(error);
      }
    );
  }, []);

  return axiosInstance;
};

export default useAxiosSecure;
