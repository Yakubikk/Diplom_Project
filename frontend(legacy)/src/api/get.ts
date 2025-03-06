import {AxiosError, AxiosResponse} from "axios";
import {apiClient, ApiResponse, handleError} from "@api/api";

const get = async <T>(url: string): Promise<ApiResponse<T>> => {
    try {
        const response: AxiosResponse<T> = await apiClient.get(url);
        return { data: response.data, status: response.status };
    } catch (error) {
        handleError(error as AxiosError);
        throw error;
    }
};

export default get;
