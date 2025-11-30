import { searchMentor } from "@/actions/mentor/filterMentor";
import { ApiError } from "@/errors/error";
import { ApiResponseWithPagination } from "@/utils/response";
import { UseInfiniteQueryOptions, UseQueryOptions } from "@tanstack/react-query";
import { init } from "next/dist/compiled/webpack/webpack";
import { queryObjects } from "v8";


export type UserMentorSearchQueryResult  = {
    id : string,
    username : string,
    experience_year : number,
    experience_month : number,
    bio : string,
    expertise : string[],
    college : string[],
    specialization : string[],

}
export type UserMentorSearchResult  = {
    username : string,
    first_name : string,
    last_name : string,
    experience_year : number,
    experience_month : number,
    bio : string,
    expertise : string[],
    college : string[],
    specialization : string[],

}

type UserMentorFilterPayload = {
        JobTitle: string;
    Specialization: string[];
    Field: string;
    ExperienceMin: number;
    Page : number;
    College: string[];
}

export const GetUserMentorSearchQueryOptions = (
  payload: UserMentorFilterPayload
): UseQueryOptions<
  ApiResponseWithPagination<UserMentorSearchQueryResult[]>,     // TQueryFnData
  ApiError,                                                     // TError
  UserMentorSearchResult[],                                     // TData
  ["user", "mentor", "search", number,number]                      // TQueryKey
> => {
  return {
    queryKey: ["user", "mentor", "search", payload.ExperienceMin,payload.Page],
    queryFn: async () => searchMentor({...payload, Limit : 10 , Offset : (payload.Page - 1) * 10}),
    select: (data) => {
        return data.data.map(({id,...rest}) => rest)
    }
  };
};