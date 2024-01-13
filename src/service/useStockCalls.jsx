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
      toastErrorNotify("Error accessing data information.");
      console.log(error);
    }
  };

  const deleteStock = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/${url}/${id}/`);
      toastSuccessNotify("Data information deleted.");
      getStocks(url);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Data could not be deleted");
      console.log(error);
    }
  };

  const addStock = async (url, newData) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`/${url}/`, newData);
      toastSuccessNotify("The operation was successful.");
      getStocks(url)
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("The operation has failed.");
      console.log(error);
    }
  };


  const updateStock = async (url, data) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/${url}/${data._id}/`, data);
      toastSuccessNotify("Data information has been updated.");
      getStocks(url);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Data could not be updated.");
      console.log(error);
    }
  };

  return { getStocks, deleteStock, addStock, updateStock };

};

export default useStockCalls;
