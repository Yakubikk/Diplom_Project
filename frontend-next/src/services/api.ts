import * as process from 'process';
import axios, {
  type InternalAxiosRequestConfig,
  type AxiosError,
  type AxiosRequestConfig,
  type AxiosResponse,
} from 'axios';
import { defaultLocale } from '@/config';
import {
  type CaseItem,
  type HomePageElements,
  type PageInfo,
  type ServiceItem,
  type Solution,
  type ArticleItem,
  type ContactUsPayload,
  type ContactUsResponse,
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
  (response: AxiosResponse) => response, // Реальные ответы обрабатываются как обычно
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
      return Promise.resolve(fakeResponse); // Возвращаем успешный фейковый ответ
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
  getSolutionsInfo: async (): Promise<PageInfo | undefined> => {
    return getResponseData<PageInfo>(await api.get('solutions/info'));
  },
  getSolutions: async (): Promise<Solution[] | undefined> => {
    return getResponseData<Solution[]>(await api.get('solutions'));
  },

  getBlogInfo: async (): Promise<PageInfo | undefined> => {
    return getResponseData<PageInfo>(await api.get('blog/info'));
  },
  getBlogArticles: async (): Promise<ArticleItem[] | undefined> => {
    return getResponseData<ArticleItem[]>(await api.get('articles'));
  },
  getBlogArticle: async (name: string): Promise<ArticleItem | undefined> => {
    return getResponseData<ArticleItem>(await api.get(`articles/${name}`));
  },
  getHomeInfo: async (): Promise<PageInfo | undefined> => {
    return getResponseData<PageInfo>(await api.get('home/info'));
  },
  getHomePageElements: async (): Promise<HomePageElements | undefined> => {
    return getResponseData<HomePageElements>(await api.get('home/elements'));
  },

  getCases: async (): Promise<CaseItem[] | undefined> => {
    return getResponseData<CaseItem[]>(await api.get('cases'));
  },
  getCase: async (name: string): Promise<CaseItem | undefined> => {
    return getResponseData<CaseItem>(await api.get(`cases/${name}`));
  },
  getCasesInfo: async (): Promise<PageInfo | undefined> => {
    return getResponseData<PageInfo>(await api.get('case-studies/info'));
  },

  getService: async (name: string): Promise<ServiceItem | undefined> => {
    return getResponseData<ServiceItem>(await api.get(`services/${name}`));
  },
  getServicesInfo: async (): Promise<PageInfo | undefined> => {
    return getResponseData<PageInfo>(await api.get('services/info'));
  },
  getServices: async (): Promise<ServiceItem[] | undefined> => {
    return getResponseData<ServiceItem[]>(await api.get('services'));
  },

  postContactUs: async (
    formData: ContactUsPayload
  ): Promise<ContactUsResponse | undefined> => {
    return getResponseData<ContactUsResponse>(
      await api.post(`${process.env.API_URL}contact-us`, formData)
    );
  },
};

export { ApiService };
