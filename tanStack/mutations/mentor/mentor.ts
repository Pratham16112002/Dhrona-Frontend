import { loginMentor, loginMentorPayload, logOutMentor, signupMentor, signupMentorPayload } from "@/actions/mentor/auth";
import { ApiError } from "@/errors/error";
import { ApiResponse } from "@/utils/response";
import { UseMutationOptions } from "@tanstack/react-query";



const MentorLoginMutationOptions : UseMutationOptions<ApiResponse<null>,ApiError,loginMentorPayload> = ({
    mutationFn : async (payload) => loginMentor(payload),
    mutationKey : ["mentor","login"]
})

const MentorLogoutMutationOptions : UseMutationOptions<ApiResponse<null>,ApiError,void> = ({
    mutationFn :  logOutMentor,
    mutationKey : ["mentor","logout"]
})

const MentorSignUpMutationOptions : UseMutationOptions<ApiResponse<null>,ApiError,signupMentorPayload> = ({
    mutationFn : async (payload) => signupMentor(payload),
    mutationKey : ["mentor","logout"]
})

export { MentorLoginMutationOptions, MentorLogoutMutationOptions, MentorSignUpMutationOptions }