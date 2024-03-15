/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { IStoreDataProvider } from "./store.types";
import useApiRequest from "@/hooks/useApiRequest";
import { Collection, FetchWrapper } from "@/utils/types";

const StoreDataProvider: React.FC<IStoreDataProvider> = ({ children }) => {
  const { request } = useApiRequest();

  const { isLoading, error, data } = useQuery<FetchWrapper<Collection>, Error>({
    queryKey: ["collection"],
    queryFn: async () =>
      request<FetchWrapper<Collection>>({ url: "/collections", method: "GET" }),
    staleTime: 1000 * 60 * 5,
  });

  return children({
    isLoading,
    response: data,
    error,
  });
};

export default StoreDataProvider;
