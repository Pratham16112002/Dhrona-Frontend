import { ApiError } from "@/errors/error";
import { AxiosError } from "axios";

export default function handleError(error: unknown): ApiError {
  // Case A: Axios error (backend responded with error)
  if (error instanceof AxiosError) {
    const status = error.response?.status ?? 500;
    console.log(error.response)
    return new ApiError({
      message: error.response?.data?.error?.message || error.message || "Internal Server Error",
      status,
      code: error.response?.data?.code,
      details: error.response?.data,
      url: error.config?.url,
    });
  }

  // Case B: Regular JS Error
  if (error instanceof Error) {
    return new ApiError({
      message: error.message,
      status: 500,
      code: "INTERNAL_JS_ERROR",
      details: null,
      url: undefined,
    });
  }

  // Case C: Completely unknown type
  return new ApiError({
    message: "Unexpected error occurred",
    status: 500,
    code: "UNKNOWN_ERROR",
    details: error,
  });
}
