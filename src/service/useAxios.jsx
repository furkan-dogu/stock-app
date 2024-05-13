import axios from "axios";
import { useSelector } from "react-redux";

const useAxios = () => {
  const { token } = useSelector((state) => state.auth);

  const axiosWithToken = axios.create({
    // baseURL: `${process.env.REACT_APP_BASE_URL}`,
    baseURL: "https://stock-api-nodejs.vercel.app",
    headers: { Authorization: `Token ${token}` },
  });

  const axiosPublic = axios.create({
    // baseURL: `${process.env.REACT_APP_BASE_URL}`,
    baseURL: "https://stock-api-nodejs.vercel.app/",
  });
  
  return { axiosWithToken, axiosPublic };
};

export default useAxios;
