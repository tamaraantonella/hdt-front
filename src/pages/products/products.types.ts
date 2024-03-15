import { CollectionProducts } from "@/utils/types";

export interface IProductDataProvider {
  children: (data: {
    isLoading: boolean;
    response?: CollectionProducts[];
    error: Error | null;
  }) => React.ReactNode;
}

export interface ProductProps {
  isLoading: boolean;
  response?: CollectionProducts[];
  error: Error | null;
}

export interface Category {
  id: string;
  name: string;
  color: string;
  createdAt: Date;
  modifiedAt: Date;
  deletedAt: Date | null;
  products: Product[];
}

export interface Product {
  id: string;
  name: string;
  description: string;
  stock: boolean;
  saleUnit: string;
  price: number;
  image: null;
  createdAt: Date;
  modifiedAt: Date;
  deletedAt: null;
}
