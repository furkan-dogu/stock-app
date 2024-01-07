import axios from "axios"
import { toastErrorNotify, toastSuccessNotify } from "../helper/ToastNotify";
import { useNavigate } from "react-router-dom";
import { fetchFail, fetchStart, loginSuccess, logoutSuccess, registerSuccess } from "../features/authSlice";
import { useDispatch } from "react-redux";

const useAuthCalls = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const login = async (userInfo) => {
        dispatch(fetchStart())
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/auth/login/`, userInfo)
            dispatch(loginSuccess(data))
            toastSuccessNotify("Giriş işlemi başarılı.")   
            navigate("/stock")   
        } catch (error) {
            dispatch(fetchFail(error))
            toastErrorNotify("Giriş işlemi başarısız oldu.")
        }
    }

    const register = async (registerInfo) => {
        dispatch(fetchStart())
        try {
            const { data } = await axios.post(`${process.env.REACT_APP_BASE_URL}/users/`, registerInfo)
            dispatch(registerSuccess(data))
            toastSuccessNotify("Kayıt işlemi başarılı.")   
            navigate("/stock")   
        } catch (error) {
            dispatch(fetchFail(error))
            toastErrorNotify("Kayıt işlemi başarısız oldu.")
        }
    }

    const logout = async (token) => {
        try {
            await axios.get(`${process.env.REACT_APP_BASE_URL}/auth/logout/`, {
                headers: { Authorization: `Token ${token}` }
            })  
            dispatch(logoutSuccess())
            toastSuccessNotify("Çıkış işlemi başarılı.")  
            navigate("/")       
        } catch (error) {
            console.log(error)
            toastErrorNotify("Çıkış işlemi başarısız oldu.")
        }
    }

    return { login, register, logout }
}

export default useAuthCalls

