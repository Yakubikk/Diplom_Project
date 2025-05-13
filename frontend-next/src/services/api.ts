import * as process from 'process';
import axios, {
  type AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
} from 'axios';
import { defaultLocale } from '@/config';
import {
  type RegisterPayload,
  type RegisterResponse,
  LoginPayload,
  LoginResponse,
  LoginPhonePayload, User, LoginPhoneResponse,
  LoginCodePayload,
  LoginCodeResponse,
} from '@/types';

const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Accept-Language': defaultLocale,
  },
} as AxiosRequestConfig);

const getResponseData = <T>(
  response: AxiosError | AxiosResponse
): T | undefined => {
  return (response as AxiosResponse<T>)?.data;
};

const ApiService = {
  postRegister: async (
    formData: RegisterPayload
  ): Promise<RegisterResponse | undefined> => {
    return getResponseData<RegisterResponse>(
        await api.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/sign-up`, formData)
    );
  },
  postLogin: async (
      formData: LoginPayload
  ): Promise<LoginResponse | undefined> => {
    return getResponseData<LoginResponse>(
        await api.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/sign-in`, formData)
    );
  },
  postPhoneLogin: async (
      formData: LoginPhonePayload
  ): Promise<LoginPhoneResponse | undefined> => {
    console.log(formData);
    return getResponseData<LoginPhoneResponse>(
        await api.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/sign-in-tel`, formData)
    );
  },
  postCodeLogin: async (
      formData: LoginCodePayload
  ): Promise<LoginCodeResponse | undefined> => {
    return getResponseData<LoginCodeResponse>(
        await api.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/tel-check`, formData)
    );
  },
  getUserDataById: async (
      data: {id: string}
  ): Promise<User | undefined> => {
    return getResponseData<User>(
        await api.post(`${process.env.NEXT_PUBLIC_API_URL}/users/get-user`, data)
    );
  },
};

export { ApiService };
