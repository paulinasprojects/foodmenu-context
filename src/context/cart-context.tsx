import { createContext, useContext, useState } from "react";
import { CartContextType, CartItem } from "../lib/types";


const CartContext = createContext<CartContextType | undefined>(undefined);

export default function CartProvider({children}: {children: React.ReactNode}) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (productId: number) => {
    setCart(cart.some((item) => item.productId === productId) ? cart.map((item) => (
      item.productId === productId ? {...item, quantity: item.quantity + 1} : item
    )) : [...cart, { productId, quantity: 1 }])
  };

  const removeFromCart  = (productId: number) => {
    setCart((currentCart) => currentCart.map((item) => item.productId === productId ? {...item, quantity: item.quantity - 1} : item))
  }

  const getProductQuantity = (productId: number) => {
    return cart.find((item) => item.productId === productId)?.quantity || 0
  }

  return (
    <CartContext.Provider value={{
      addToCart,
      cart,
      // cartProducts,
      // cartTotal,
      // deleteFromCart,
      getProductQuantity,
      removeFromCart,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be within a CartProvider")
  }

  return context;
}