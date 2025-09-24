import { baseApi, SuccessResponse } from "@/redux/app/baseApi";
import { LoginDTO, RegisterDTO, VerifyOtpDTO, IUser } from "@/types/auth";
import { setUser, logoutUser } from "./authSlice";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    //    Login
    login: builder.mutation<SuccessResponse<IUser>, LoginDTO>({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data.data));
        } catch (error) {
          console.error("Login failed:", error);
        }
      },
    }),

    //    Register
    register: builder.mutation<SuccessResponse<IUser>, RegisterDTO>({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data.data));
        } catch (error) {
          console.error("Register failed:", error);
        }
      },
    }),

    //    Verify OTP
    verifyOtp: builder.mutation<SuccessResponse<IUser>, VerifyOtpDTO>({
      query: (data) => ({
        url: "/auth/verify-email",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data.data));
        } catch (error) {
          console.error("OTP verification failed:", error);
        }
      },
    }),

    //    Resend OTP code
    resendCode: builder.mutation<SuccessResponse<void>, void>({
      query: () => ({
        url: "/auth/verify-email/resend-code",
        method: "POST",
      }),
    }),

    //    Get User Data
    getUserData: builder.query<SuccessResponse<IUser>, void>({
      query: () => ({
        url: "/auth/user-data",
        method: "GET",
      }),
    }),

    //    Logout
    logout: builder.mutation<SuccessResponse<void>, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useVerifyOtpMutation,
  useResendCodeMutation,
  useGetUserDataQuery,
  useLogoutMutation,
} = authApi;
