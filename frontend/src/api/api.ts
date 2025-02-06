import axios, { AxiosInstance, AxiosError } from 'axios';

export const apiClient: AxiosInstance = axios.create({
    baseURL: 'https://your-api-endpoint.com/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

export interface ApiResponse<T> {
    data: T;
    status: number;
}

export const handleError = (error: AxiosError) => {
    if (error.response) {
        console.error('Ошибка ответа сервера:', error.response.data);
        console.error('Статус ошибки:', error.response.status);
    } else if (error.request) {
        console.error('Ошибка запроса:', error.request);
    } else {
        console.error('Ошибка:', error.message);
    }
    throw error;
};
