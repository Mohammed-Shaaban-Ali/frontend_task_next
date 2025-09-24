export interface LoginDTO {
  email: string;
  password: string;
}
export interface RegisterDTO {
  email: string;
  name: string;
  password: string;
  password_confirmation: string;
  mobile_country_code: string;
  mobile: string;
}

export interface IUser {
  id: number;
  type: "client" | "admin";
  name: string;
  email: string;
  mobile_country_code: string;
  mobile: string;
  image: string;
  email_verified_at: boolean;
  count_items_cart: number;
  token: string;
}

export interface IAuthState {
  token: string;
  user: IUser | null;
}

export interface VerifyOtpDTO {
  code: string;
}
