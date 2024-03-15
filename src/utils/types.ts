export interface Collection {
  id: string;
  name: string;
  color?: string | null;
  imageUrl: string | null;
  createdAt: string;
  modifiedAt?: string;
}

export interface CollectionProducts {
  id: string;
  name: string;
  price: number;
  saleUnit: string;
  description: string | null;
  imageUrl: string | null;
  stock: boolean;
  category: Category;
}

export interface Category {
  id: string;
  name: string;
  color: string;
}

export interface FetchWrapper<Entity> {
  data: Entity[] | null;
  count: number;
}

export interface OrderItem {
  id: number;
  productId: string;
  quantity: number;
  totalPrice: number;
}

export interface Order {
  id: number;
  user_name: string;
  user_phone: string;
  total: number;
  orderItems: OrderItem[];
  createdAt: string;
}

export interface CreateOrder {
  user_name: string;
  user_phone: string;
  total: number;
  order_items: {
    product_id: string;
    quantity: number;
    total_price: number;
  }[];
}
