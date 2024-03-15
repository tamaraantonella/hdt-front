import { Collection, FetchWrapper } from "@/utils/types";

export interface IStoreDataProvider {
  children: (data: {
    isLoading: boolean;
    response?: FetchWrapper<Collection> | null;
    error: Error | null;
  }) => React.ReactNode;
}

export interface StoreProps {
  isLoading: boolean;
  response?: FetchWrapper<Collection> | null;
  error: Error | null;
}
