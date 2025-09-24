import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { RootState } from "./store";
import { toast } from "sonner";
import { API_URL } from "@/constants";

//  Update ErrorResponse type
export interface ErrorResponse {
  message?: string;
  errors?: Record<string, string[]>;
}

//  Success response type
export interface SuccessResponse<DataType = any> {
  data: DataType;
  message: string;
  status: number;
}

//  Helper for safe method detection
const getRequestMethod = (args: any): string => {
  if (typeof args === "string") return "GET";
  return (args.method || "GET").toUpperCase();
};

//  Custom fetchBaseQuery with headers
const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) headers.set("authorization", `Bearer ${token}`);
    return headers;
  },
});

//  Interceptor wrapper
const baseQueryWithInterceptor: typeof baseQuery = async (
  args,
  api,
  extraOptions
) => {
  const result = await baseQuery(args, api, extraOptions);
  const method = getRequestMethod(args);

  if (result.error) {
    const error = result.error as FetchBaseQueryError;
    if (typeof error.data === "object" && error.data !== null) {
      const errorResponse = error.data as ErrorResponse;

      if (method !== "GET") {
        // `errors`
        if (errorResponse.errors) {
          Object.entries(errorResponse.errors).forEach(([field, messages]) => {
            messages.forEach((msg) => toast.error(msg));
          });
        } else if (errorResponse.message) {
          toast.error(errorResponse.message);
        }
      }
    }
  } else if (result.data) {
    const successResponse = result.data as SuccessResponse;
    if (method !== "GET") {
      toast.success(successResponse.message || "Success");
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithInterceptor,
  tagTypes: ["profile"],
  endpoints: () => ({}),
});
