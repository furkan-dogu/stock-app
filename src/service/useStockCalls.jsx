import { useDispatch } from "react-redux";
import {
  getStocksSuccess,
  fetchFail,
  fetchStart,
} from "../features/stockSlice";
import useAxios from "./useAxios";
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";

const useStockCalls = () => {
  const dispatch = useDispatch();
  const { axiosWithToken } = useAxios();

  const getStocks = async (url) => {
    dispatch(fetchStart());
    try {
      const { data } = await axiosWithToken(`/${url}/`);
      const apiData = data.data;
      dispatch(getStocksSuccess({ apiData, url }));
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Veri bilgilerine ulaşırken hata oluştu.");
      console.log(error);
    }
  };

  return { getStocks };
};

export default useStockCalls;
