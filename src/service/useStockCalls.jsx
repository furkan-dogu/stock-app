import { fetchFail, fetchStart } from "../features/authSlice";
import { useDispatch } from "react-redux";
import { firmsSuccess } from "../features/stockSlice";
import useAxios from "./useAxios";

const useStockCalls = () => {
    const dispatch = useDispatch()
    const { axiosWithToken } = useAxios()
    

    const getFirms = async () => {
        dispatch(fetchStart())
        try {
            const {data} = await axiosWithToken("/firms/")
            dispatch(firmsSuccess(data))
            console.log(data)
        } catch (error) {
            dispatch(fetchFail())
            console.log(error);
        }
        
    }

  return {getFirms}
}

export default useStockCalls