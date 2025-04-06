export type FoodCategory =
  | 'pizza'
  | 'burger'
  | 'pasta'
  | 'coldDrink'
  | 'hotDrink'
  | 'combo'
  | 'chicken'
  | 'sauce';

export type FoodItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  discountedPrice?: number;
  image: string;
  category: FoodCategory;
  rating: number;
  isPopular?: boolean;
  isNew?: boolean;
  isSale?: boolean;
};

export type CartItem = {
  item: FoodItem;
  quantity: number;
};

export type Cart = {
  items: CartItem[];
  totalPrice: number;
  totalItems: number;
};

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export type Order = {
  id: string;
  items: CartItem[];
  totalPrice: number;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
  deliveryAddress: string;
  contactNumber: string;
  paymentMethod: 'cash' | 'card';
};

export type User = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  address?: string;
  orders?: Order[];
};

export type APIResponse<T> = {
  success: boolean;
  data?: T;
  error?: string;
};
