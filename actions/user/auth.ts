import axiosClient from "@/axios/axiosClient"
import handleError from "@/utils/errorHandling"

export type loginUserPayload = {
    email : string,
    password : string
}

const loginUser = async (payload : loginUserPayload) => {
    try {
        const response = await axiosClient?.post("user/login",payload)
        return response.data

    } catch (error : unknown) {
        throw handleError(error)
    } 
}

const logOutUser = async () => {
    try {
        const response = await axiosClient?.put("user/logout",{})
        return response?.data
    } catch (error : unknown) {
        throw handleError(error)
    }
}

export type signUpUserPayload = {
    username : string,
    first_name : string,
    last_name : string,
    email : string,
    password : string
}
const signUpUser = async (payload : signUpUserPayload) => {
    try {
        const response = await axiosClient?.post("user/signup",payload)
        return response.data
    } catch (error : unknown) {
        throw handleError(error)
    }
}

export {loginUser,logOutUser,signUpUser}