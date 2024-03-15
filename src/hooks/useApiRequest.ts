import { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { useCallback } from "react";
import axios from "../axios-config";

const useApiRequest = () => {
  const request = useCallback(async <T>(params: AxiosRequestConfig) => {
    let axiosResponse: AxiosResponse<T>;
    try {
      axiosResponse = await axios.request({
        ...params,
      });
      return axiosResponse.data;
    } catch (error: unknown) {
      if (error instanceof AxiosError) {
        throw new Error(error.response?.data.message || "An error occurred");
      }
      throw error;
    }
  }, []);

  return { request };
};

export default useApiRequest;
