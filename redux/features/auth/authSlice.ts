import { USER_COOKIE, TOKEN_COOKIE } from "@/constants/index";
import { IAuthState, IUser } from "@/types/auth";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { setCookie, getCookie, deleteCookie } from "cookies-next";

const initialState: IAuthState = {
  token: getCookie(TOKEN_COOKIE) ? (getCookie(TOKEN_COOKIE) as string) : "",
  user: getCookie(USER_COOKIE)
    ? JSON.parse(getCookie(USER_COOKIE) as string)
    : "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<NonNullable<IUser>>) => {
      state.token = action.payload.token;
      setCookie(TOKEN_COOKIE, action.payload?.token);
      state.user = action.payload;
      setCookie(USER_COOKIE, JSON.stringify(action.payload));
    },
    logoutUser: (state) => {
      state.token = "";
      state.user = null;
      deleteCookie(TOKEN_COOKIE);
      deleteCookie(USER_COOKIE);
      window.location.href = "/";
    },
  },
});

export const { setUser, logoutUser } = authSlice.actions;
export default authSlice;
