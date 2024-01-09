import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import { fetchFail, fetchStart, loginSuccess, logoutSuccess, registerSuccess } from "../features/authSlice";
import { useDispatch } from "react-redux";
import useAxios from "./useAxios";

const useAuthCalls = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { axiosWithToken, axiosPublic } = useAxios()

    const login = async (userInfo) => {
        dispatch(fetchStart())
        try {
            const { data } = await axiosPublic.post("/auth/login/", userInfo)
            dispatch(loginSuccess(data))
            toastSuccessNotify("Giriş işlemi başarılı.")   
            navigate("/stok")   
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())
            toastErrorNotify("Giriş işlemi başarısız oldu.")
        }
    }

    const register = async (registerInfo) => {
        dispatch(fetchStart())
        try {
            const { data } = await axiosPublic.post("/users/", registerInfo)
            dispatch(registerSuccess(data))
            toastSuccessNotify("Kayıt işlemi başarılı.")   
            navigate("/stok")   
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())
            toastErrorNotify("Kayıt işlemi başarısız oldu.")
        }
    }

    const logout = async () => {
        try {
            await axiosWithToken("/auth/logout/")
            dispatch(logoutSuccess())
            toastSuccessNotify("Çıkış işlemi başarılı.")       
        } catch (error) {
            console.log(error)
            toastErrorNotify("Çıkış işlemi başarısız oldu.")
        }
    }

    return { login, register, logout }
}

export default useAuthCalls

