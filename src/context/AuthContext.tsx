"use client";

import React, { createContext, useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import axios from "axios";

import {
  checkUserStatus,
  login,
  logout,
  refreshToken,
  signup,
} from "@/queries/auth";
import { formatMessage } from "@/utils/utils";
import { LoginDto, SignupDto, UserDataType, AuthValuesType } from "./types";
import { ACCESS_TOKEN_KEY, USER_DATA_KEY } from "@/constants/constants";
// import { ACCESS_TOKEN_KEY, USER_DATA_KEY } from "@/constants/endpoints";

const setupAuthInterceptor = (logoutFn: () => void) => {
  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
      if (error.response?.status === 401) {
        try {
          await refreshToken();
        } catch {
          logoutFn();
          toast.error("Session expired. Please login again.");
        }
      }
      return Promise.reject(error);
    }
  );
};

const AuthContext = createContext<AuthValuesType>({} as AuthValuesType);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<UserDataType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  // Initial auth check
  useEffect(() => {
    const initAuth = async () => {
      setLoading(true);
      const storedUser = localStorage.getItem(USER_DATA_KEY);
      if (storedUser) {
        try {
          await checkUserStatus();
          setUser(JSON.parse(storedUser));
        } catch {
          localStorage.removeItem(USER_DATA_KEY);
          localStorage.removeItem(ACCESS_TOKEN_KEY);
          setUser(null);
        }
      }
      setLoading(false);
    };

    initAuth();
  }, []);

  // Setup auth interceptor
  useEffect(() => {
    setupAuthInterceptor(() => handleLogout.mutate());
  }, []);

  // Login Mutation
  const handleLogin = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem(ACCESS_TOKEN_KEY, data.token);
      localStorage.setItem(USER_DATA_KEY, JSON.stringify(data.user));
      setUser(data.user);
      toast.success("Login successful");
      router.push("/chat");
    },
    onError: (err: any) => {
      toast.error(formatMessage(err.response?.data?.message) ?? "Login failed");
    },
  });

  // Register Mutation
  const handleRegister = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      localStorage.setItem(ACCESS_TOKEN_KEY, data.token);
      localStorage.setItem(USER_DATA_KEY, JSON.stringify(data.user));
      setUser(data.user);
      toast.success("Registration successful");
      router.push("/chat");
    },
    onError: (err: any) => {
      toast.error(
        formatMessage(err.response?.data?.message) ?? "Registration failed"
      );
    },
  });

  // Logout Mutation
  const handleLogout = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      localStorage.removeItem(ACCESS_TOKEN_KEY);
      localStorage.removeItem(USER_DATA_KEY);
      setUser(null);
      toast.success("Logout successful");
      router.push("/");
    },
    onError: (err: any) => {
      toast.error(
        formatMessage(err.response?.data?.message) ?? "Logout failed"
      );
    },
  });

  // Context values
  const values: AuthValuesType = {
    user,
    loading,
    setUser,
    setLoading,
    login: {
      mutate: handleLogin.mutate,
      isLoading: handleLogin.isLoading,
    },
    register: {
      mutate: handleRegister.mutate,
      isLoading: handleRegister.isLoading,
    },
    logout: {
      mutate: handleLogout.mutate,
      isLoading: handleLogout.isLoading,
    },
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

// Custom hook for using auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
