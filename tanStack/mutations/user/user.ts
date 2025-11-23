import { loginUser, loginUserPayload, logOutUser, signUpUser, signUpUserPayload } from "@/actions/user/auth";
import { ApiError } from "@/errors/error";
import { ApiResponse } from "@/utils/response";
import { UseMutationOptions } from "@tanstack/react-query";



const UserloginMutationOptions : UseMutationOptions<ApiResponse<null>,ApiError,loginUserPayload> = ({
    mutationFn : async (payload) => loginUser(payload),
    mutationKey : ["user","login"]
}) 

const UserLogoutMutationOptions : UseMutationOptions<ApiResponse<null>,ApiError,void> = ({
    mutationFn : async () => logOutUser(),
    mutationKey : ["user","logout"]
})

const UserSignUpMutationOptions : UseMutationOptions<ApiResponse<null>,ApiError,signUpUserPayload> = ({
    mutationFn : async (payload) => signUpUser(payload),
    mutationKey : ["user","logout"]
})

export { UserloginMutationOptions,UserLogoutMutationOptions,UserSignUpMutationOptions}