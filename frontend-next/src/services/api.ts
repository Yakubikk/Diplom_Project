import * as process from 'process';
import axios, {
  type InternalAxiosRequestConfig,
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
import { fakeEndpoints } from './fakeEndpoints';

const useFakeBackend = process.env.NEXT_PUBLIC_USE_FAKE_BACKEND === 'true';

const api = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    'Accept-Language': defaultLocale,
  },
} as AxiosRequestConfig);

if (useFakeBackend) {
  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const endpoint = config.url ?? '';
      if (fakeEndpoints[endpoint]) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (config as any).isFake = true;
      }
      return Promise.reject(config);
    },
    (error) => Promise.reject(error)
  );
}

api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    const config = error as InternalAxiosRequestConfig & {
      isFake?: boolean;
    };

    if (config?.isFake) {
      const endpoint = config.url ?? '';

      const fakeResponse = {
        data: fakeEndpoints[endpoint],
        status: 200,
        statusText: 'OK',
        headers: {},
        config,
      };
      return Promise.resolve(fakeResponse);
    }
    console.log(error);
  }
);

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
        await api.post(`${process.env.NEXT_PUBLIC_API_URL}users/sign-up`, formData)
    );
  },
  postLogin: async (
      formData: LoginPayload
  ): Promise<LoginResponse | undefined> => {
    return getResponseData<LoginResponse>(
        await api.post(`${process.env.NEXT_PUBLIC_API_URL}users/sign-in`, formData)
    );
  },
  postPhoneLogin: async (
      formData: LoginPhonePayload
  ): Promise<LoginPhoneResponse | undefined> => {
    console.log(formData);
    return getResponseData<LoginPhoneResponse>(
        await api.post(`${process.env.NEXT_PUBLIC_API_URL}users/sign-in-tel`, formData)
    );
  },
  postCodeLogin: async (
      formData: LoginCodePayload
  ): Promise<LoginCodeResponse | undefined> => {
    return getResponseData<LoginCodeResponse>(
        await api.post(`${process.env.NEXT_PUBLIC_API_URL}users/tel-check`, formData)
    );
  },
  getUserDataById: async (
      data: {id: string}
  ): Promise<User | undefined> => {
    return getResponseData<User>(
        await api.post(`${process.env.NEXT_PUBLIC_API_URL}users/get-user`, data)
    );
  },
};

export { ApiService };
