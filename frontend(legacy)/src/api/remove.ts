import {AxiosError, AxiosResponse} from "axios";
import {apiClient, ApiResponse, handleError} from "@api/api";

const remove = async <T>(url: string): Promise<ApiResponse<T>> => {
    try {
        const response: AxiosResponse<T> = await apiClient.delete(url);
        return { data: response.data, status: response.status };
    } catch (error) {
        handleError(error as AxiosError);
        throw error;
    }
};

export default remove;
