export type CartItem = {
  productId: number;
  quantity: number;
};

export type Review = {
  id: number;
  user: string;
  rating: number;
  comment: string;
  date: string;
};

export type ReviewsProps = {
  reviews: Review[];
};

export type CartProduct = {
  id: number;
  url: string;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  reviews: Review[];
};

export type CartContextType = {
  cart: CartItem[];
  addToCart: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  // deleteFromCart: (productId: number) => void;
  getProductQuantity: (productId: number) => number;
  // cartTotal: number;
  // cartProducts: CartProduct[];
};
