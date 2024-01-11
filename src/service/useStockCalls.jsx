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

  const deleteStock = async (url, id) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.delete(`/${url}/${id}/`);
      toastSuccessNotify("Veri bilgisi silindi.");
      getStocks(url);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Veri silinemedi.");
      console.log(error);
    }
  };

  const addStock = async (url, newData) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.post(`/${url}/`, newData);
      toastSuccessNotify("İşlem başarıyla gerçekleşti.");
      getStocks(url)
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("İşlem başarısız oldu.");
      console.log(error);
    }
  };


  const updateStock = async (url, id, data) => {
    dispatch(fetchStart());
    try {
      await axiosWithToken.put(`/${url}/${id}/`, data);
      toastSuccessNotify("Veri bilgisi güncellendi.");
      getStocks(url);
    } catch (error) {
      dispatch(fetchFail());
      toastErrorNotify("Veri güncellenemedi.");
      console.log(error);
    }
  };

  return { getStocks, deleteStock, addStock, updateStock };

};

export default useStockCalls;
