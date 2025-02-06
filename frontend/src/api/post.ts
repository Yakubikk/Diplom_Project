import {AxiosError, AxiosResponse} from "axios";
import {apiClient, ApiResponse, handleError} from "@api/api";

const post = async <T>(url: string, data: never): Promise<ApiResponse<T>> => {
    try {
        const response: AxiosResponse<T> = await apiClient.post(url, data);
        return { data: response.data, status: response.status };
    } catch (error) {
        handleError(error as AxiosError);
        throw error;
    }
};

export default post;
