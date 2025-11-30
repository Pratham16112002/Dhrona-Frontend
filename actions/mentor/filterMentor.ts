import axiosClient from "@/axios/axiosClient"
import handleError from "@/utils/errorHandling"
import { cleanUserMentorSearchPayload } from "@/utils/helper"

export type SearchMentorPayload = {
    JobTitle?: string,
    Specialization?: string[],
    Field?: string
    ExperienceMin: number
    College?: string[],
    Limit: number,
    Offset: number
}

const searchMentor = async (payload: SearchMentorPayload) => {
    const c_payload = cleanUserMentorSearchPayload(payload)
    const params = new URLSearchParams()

    if(c_payload.JobTitle){
        params.append("title",c_payload.JobTitle)
    }
    if(c_payload.Specialization && c_payload.Specialization.length > 0){
            params.append("expertise",c_payload.Specialization.join(","))
    }
    if(c_payload.Field){
        params.append("field",c_payload.Field)
    }
    if(c_payload.ExperienceMin !== undefined){
        params.append("experience",c_payload.ExperienceMin.toString())
    }
    if(c_payload.College && c_payload.College.length > 0){
        params.append("college",c_payload.College.join(","))
    }
    params.append("limit",String(c_payload.Limit))
    params.append("offset",String(c_payload.Offset))
    try {
        const response = await axiosClient?.get(`user/mentors?${params.toString()}`)
        return response?.data
    } catch (error: unknown) {
        throw handleError(error)
    }
}

export { searchMentor }