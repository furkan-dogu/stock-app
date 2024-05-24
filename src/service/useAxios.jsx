import axios from "axios";
import { useSelector } from "react-redux";

const useAxios = () => {
  const { token } = useSelector((state) => state.auth);

  const axiosWithToken = axios.create({
    baseURL: "https://stock-api-drab.vercel.app",
    headers: { Authorization: `Token ${token}` },
  });

  const axiosPublic = axios.create({
    baseURL: "https://stock-api-drab.vercel.app",
  });
  
  return { axiosWithToken, axiosPublic };
};

export default useAxios;
