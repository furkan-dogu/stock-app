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
            toastSuccessNotify("The login process is successful.")   
            navigate("/stock")   
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())
            toastErrorNotify("The login process failed.")
        }
    }

    const register = async (registerInfo) => {
        dispatch(fetchStart())
        try {
            const { data } = await axiosPublic.post("/users/", registerInfo)
            dispatch(registerSuccess(data))
            toastSuccessNotify("The register process is successful.")   
            navigate("/stock")   
        } catch (error) {
            console.log(error)
            dispatch(fetchFail())
            toastErrorNotify("The register process failed.")
        }
    }

    const logout = async () => {
        try {
            await axiosWithToken("/auth/logout/")
            dispatch(logoutSuccess())
            toastSuccessNotify("The logout process is successful.")       
        } catch (error) {
            console.log(error)
            toastErrorNotify("The logout process failed.")
        }
    }

    return { login, register, logout }
}

export default useAuthCalls

