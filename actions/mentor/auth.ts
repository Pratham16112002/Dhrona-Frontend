import axiosClient from "@/axios/axiosClient"
import handleError from "@/utils/errorHandling"



export type loginMentorPayload = {
    email : string,
    password : string
}

const loginMentor = async (payload : loginMentorPayload) => {
    try {
        const response = await axiosClient?.post("mentor/login",payload)
        return response.data

    } catch (error : unknown) {
        throw handleError(error)
    } 
}


const logOutMentor = async () => {
    try {
        const response = await axiosClient?.put("mentor/logout",{})
        return response?.data
    } catch (error : unknown) {
        throw handleError(error)
    }
}


export type signupMentorPayload = {
    username: string;
    first_name: string;
    last_name: string;
    experience_year: number;
    experience_month: number;
    bio: string;
    email: string;
    password: string;
}

const signupMentor = async (payload: signupMentorPayload) => {
    try {
        const response = await axiosClient?.post("mentor/signup", payload)
        return response?.data
    } catch (error: unknown) {
        throw handleError(error)
    }
}

export {loginMentor,logOutMentor,signupMentor}