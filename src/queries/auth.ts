// import { ACCESS_TOKEN_KEY } from "@/constants/constant";
// import endpoints, { ACCESS_TOKEN_KEY } from "@/constants/endpoints";
import { ACCESS_TOKEN_KEY } from "@/constants/constants";
import endpoints from "@/constants/endpoints";
import axios from "axios";
// import { ACCESS_TOKEN_KEY } from "src/constants/constant";
// import endpoints from 'src/constants/endpoints'

interface LoginDto {
  email: string;
  password: string;
}

interface SignupDto {
  name: string;
  email: string;
  password: string;
}

export const login = async (credentials: LoginDto) => {
  const { data } = await axios.post(endpoints.auth.login, credentials, {
    withCredentials: true,
  });
  return data;
};

export const signup = async (signupData: SignupDto) => {
  const { data } = await axios.post(endpoints.auth.registration, signupData, {
    withCredentials: true,
  });
  return data;
};

export const logout = async () => {
  const token = localStorage.getItem(ACCESS_TOKEN_KEY);
  const { data } = await axios.post(
    endpoints.auth.logout,
    {},
    {
      headers: { Authorization: `Bearer ${token}` },
      withCredentials: true,
    }
  );
  return data;
};

export const refreshToken = async () => {
  const { data } = await axios.get(endpoints.auth.refresh, {
    withCredentials: true,
  });
  return data;
};

export const checkUserStatus = async () => {
  const { data } = await axios.get(endpoints.user.userDetails, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem(ACCESS_TOKEN_KEY)}`,
    },
    withCredentials: true,
  });
  return data;
};
