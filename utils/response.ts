
export type ApiResponse<T> = {
    status : string,
    data : T,
    message : string,
    error : null
}

export type ApiResponseWithPagination<T> = {
    limit : number,
    page : number,
    total : number,
    data : T
}